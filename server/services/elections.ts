import factory from "../factory";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";
import isElegibleToVote from "../middleware/isElegibleToVote";
import isEligibleToEditElection from "../middleware/isEligibleToEditElection";

import { db } from "@/prisma/db.injector";

import ballotClient from "../../services/ballot-service/client";
import propositionClient from "../../services/proposition-service/client";
import validationClient from "../../services/validation-service/client";

export const getElectionsHandler = factory.createHandlers(isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id } = c.var;

  // Find all elections for the team that are not deleted if the current user is a member
  const elections = await db.elections
    .findMany({
      where: {
        team_id,
        is_deleted: {
          not: true,
        },
      },
      orderBy: {
        created_at: "desc",
      },
      include: {
        ballots: {
          where: {
            user_id,
          },
        },
      },
    })
    .finally(() => db.$disconnect());

  // Return the list of elections
  return c.json(
    elections.map(({ ballots, ...rest }) => ({
      ...rest,
      has_voted: ballots.length > 0,
    }))
  );
});

export const createElectionHandler = factory.createHandlers(isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { name, description, start_at, end_at, propositions } = await c.req.json();

  // Create a new election for the team if the current user is an admin
  const election = await db.elections
    .create({
      data: {
        team_id,
        name,
        description,
        start_at,
        end_at,
        propositions: {
          create: propositions,
        },
      },
    })
    .finally(() => db.$disconnect());

  // Return the new election
  return c.json(election, 201);
});

export const getElectionHandler = factory.createHandlers(isMemberOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { user_id } = c.var;

  // Find a specific election for the team that is not deleted if the current user is a member
  const election = await db.elections
    .findUnique({
      where: {
        id: election_id,
        team_id,
        is_deleted: {
          not: true,
        },
      },
      // Include the ballots and propositions for the current user
      include: {
        ballots: {
          where: {
            user_id,
          },
        },
        propositions: true,
      },
    })
    .finally(() => db.$disconnect());

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Extract the ballots from the election
  const { ballots, ...rest } = election;

  // Return the election with a flag indicating if the current user has voted
  return c.json({
    ...rest,
    has_voted: ballots.length > 0,
  });
});

export const updateElectionHandler = factory.createHandlers(isAdminOfTeam, isEligibleToEditElection, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { name, description, start_at, end_at, propositions } = await c.req.json();

  // check if the election exists and has not started
  const election = await db.elections.update({
    where: {
      id: election_id,
      team_id,
    },
    data: {
      name,
      description,
      start_at,
      end_at,
      propositions: {
        create: propositions,
      },
    },
  }).finally(() => db.$disconnect());

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Return no content status
  return c.body(null, 204);
});

export const deleteElectionHandler = factory.createHandlers(isAdminOfTeam, isEligibleToEditElection, async (c) => {
  const { election_id, team_id } = c.req.param();

  // check if the election exists
  const election = await db.elections.update({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
    data: {
      is_deleted: true,
    },
  }).finally(() => db.$disconnect());

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Return no content status
  return c.body(null, 204);
});

export const getResultsHandler = factory.createHandlers(isMemberOfTeam, async (c) => {
  const { election_id } = c.req.param();

  // Get election result from the proposition service
  const request = await propositionClient.api.results.election[
    ":election_id"
  ].$get({
    param: {
      election_id,
    },
  });

  // Return an error if the request is not successful
  if (!request.ok)
    return c.json(
      {
        message: `Election with ID ${election_id} could not generate result`,
      },
      400
    );

  const response = await request.json();

  // Return the election result
  return c.json(response);
});

export const getValidationHandler = factory.createHandlers(isMemberOfTeam, async (c) => {
  const { election_id } = c.req.param();

  // Find the validation for the election
  const electionValidation = await db.electionValidation.findFirst({
    where: {
      election_id,
    },
  });

  // If no validation is found, return no content
  if (!electionValidation) return c.body(null, 204);

  // Generate a proof for the election validation,
  // to compare with the stored proof to verify the validation is valid
  const proofRequest = await ballotClient.api.proofs[":value"].$get({
    param: {
      value:
        electionValidation.election_id +
        electionValidation.is_votes_valid +
        electionValidation.is_propositions_valid +
        electionValidation.is_ballots_valid,
    },
  });

  // Extract the hash from the proof
  const { hash: proofHash } = await proofRequest.json();

  // Extract the stored proof from the validation
  const { proof, ...rest } = electionValidation;

  // If the proof does not match the validation proof, return an error
  if (proofHash !== electionValidation.proof)
    return c.text(`Proof for election with ID ${election_id} is invalid`, 400);

  // Return the election validation without the proof
  return c.json(rest);
});

export const createVoteHandler = factory.createHandlers(isMemberOfTeam, isElegibleToVote, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { proposition_id } = await c.req.json();
  const { user_id } = c.var;

  // Check if the election exists and is active
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  }).finally(() => db.$disconnect());

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Check if the election has started and return an error if it has not
  if (election.start_at > new Date())
    return c.json(
      { message: `Election with ID ${election_id} has not started yet` },
      400
    );

  // Check if the election has ended and return an error if it has
  if (election.end_at < new Date())
    return c.json(
      { message: `Election with ID ${election_id} has already ended` },
      400
    );

  // Create a new ballot for the user and election
  const ballot = await db.ballots
    .create({
      data: {
        election_id: election.id,
        user_id,
        used_at: new Date(),
        is_used: true,
      },
    })
    .finally(() => db.$disconnect());

  // Generate the ballot proof using the ballot service
  const ballotProof = await ballotClient.api.proofs[":value"].$get({
    param: {
      value: ballot.id,
    },
  });
  const { hash: ballotHash } = await ballotProof.json();

  // Generate the proposition proof using the proposition service
  const propositionProof = await propositionClient.api.proofs[":value"].$get({
    param: {
      value: proposition_id,
    },
  });
  const { hash: propositionHash } = await propositionProof.json();

  // Generate the validation proof using the validation service
  const validationProof = await validationClient.api.proofs[":first"][
    ":second"
  ].$get({
    param: {
      first: ballotHash,
      second: propositionHash,
    },
  });
  const { hash: validationHash } = await validationProof.json();

  // Create a new vote with the proofs
  await db.votes
    .create({
      data: {
        election_id: election.id,
        ballot_proof: ballotHash,
        proposition_proof: propositionHash,
        validation_proof: validationHash,
      },
    })
    .finally(() => db.$disconnect());

  // Return the ballot
  return c.json(ballot);
});

export const startElectionHandler = factory.createHandlers(isAdminOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();

  // Fin the sepcific election if the user is an admin of the team
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  }).finally(() => db.$disconnect());

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Return an error if the election has already started
  if (election.start_at < new Date())
    return c.json(
      { message: `Election with ID ${election_id} has already started` },
      400
    );

  // Update the election to start now
  await db.elections.update({
    where: {
      id: election.id,
    },
    data: {
      start_at: new Date(),
    },
  }).finally(() => db.$disconnect());

  // Return no content status
  return c.body(null, 204);
});

export const endElectionHandler = factory.createHandlers(isAdminOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();

  // Find the specific election if the user is an admin of the team
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  }).finally(() => db.$disconnect());

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Return an error if the election has not started
  if (election.start_at > new Date())
    return c.json(
      { message: `Election with ID ${election_id} has not started yet` },
      400
    );

  // Return an error if the election has already ended
  if (election.end_at > new Date())
    return c.json(
      { message: `Election with ID ${election_id} has already ended` },
      400
    );

  // Update the election to end now
  await db.elections.update({
    where: {
      id: election.id,
    },
    data: {
      end_at: new Date(),
    },
  }).finally(() => db.$disconnect());

  // Return no content status
  return c.body(null, 204);
});