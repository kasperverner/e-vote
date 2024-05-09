import type { Environment } from "../environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";
import isElegibleToVote from "../middleware/isElegibleToVote";
import isEligibleToEditElection from "../middleware/isEligibleToEditElection";
import ballotClient from "../../services/ballot-service/client";
import propositionClient from "../../services/proposition-service/client";
import validationClient from "../../services/validation-service/client";
import injectDb from '../../prisma/db.injector';
import isAuthorized from "../middleware/isAuthorized";

/**
 * The router for the elections endpoints.
 * injectDb middleware is used to inject the db into the context
 * isAuthorized middleware is used to check if the user is authenticated and inject the user_id into the context
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = new Hono<Environment>()
  .use(injectDb, isAuthorized)
  .basePath("/:team_id/elections");

// Get all elections for a team
router.get("/", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, db } = c.var;

  // Find all elections for the team that are not deleted if the current user is a member
  const elections = await db.elections.findMany({
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
  });

  // Return the list of elections
  return c.json(
    elections.map(({ ballots, ...rest }) => ({
      ...rest,
      has_voted: ballots.length > 0,
    }))
  );
});

// Create a new election for a team
router.post("/", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { name, description, start_at, end_at, propositions } =
    await c.req.json();
  const { db } = c.var;

  // Create a new election for the team if the current user is an admin
  const election = await db.elections.create({
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
  });

  // Return the new election
  return c.json(election, 201);
});

// Get a specific election for a team
router.get("/:election_id", isMemberOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { user_id, db } = c.var;

  // Find a specific election for the team that is not deleted if the current user is a member
  const election = await db.elections.findUnique({
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
  });

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Extract the ballots from the election
  const { ballots, ...rest } = election;

  // Return the election with a flag indicating if the user has voted
  return c.json({
    ...rest,
    has_voted: ballots.length > 0,
  });
})

// Update a specific election for a team
router.put("/:election_id", isAdminOfTeam, isEligibleToEditElection, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { name, description, start_at, end_at, propositions } =
    await c.req.json();
  const { db } = c.var;

  // check if the election exists and has not started
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the election is not found
  if (!election) return c.notFound();

  // Update the election with the new data
  await db.elections.update({
    where: {
      id: election.id,
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
  });

  // Return no content status
  return c.body(null, 204);
})

// Delete a specific election for a team
router.delete("/:election_id", isAdminOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { db } = c.var;

  // check if the election exists
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the election is not found
  if (!election)
    return c.notFound();

  // Mark the election as deleted if it is not already deleted
  await db.elections.update({
    where: {
      id: election.id,
    },
    data: {
      is_deleted: true,
    },
  });

  // Return no content status
  return c.body(null, 204);
})

// Get the result for an election
router.get("/:election_id/result", isMemberOfTeam, async (c) => {
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
})

// Get the validation for an election
router.get("/:election_id/validation", isMemberOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { db } = c.var;

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
    return c.text(
      `Proof for election with ID ${election_id} is invalid`,
      400
    );

  // Return the election validation without the proof
  return c.json(rest);
})

// Vote on a proposition for an election
router.post("/:election_id/vote", isMemberOfTeam, isElegibleToVote, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { proposition_id } = await c.req.json();
  const { user_id, db } = c.var;

  // Check if the election exists and is active
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the election is not found
  if (!election)
    return c.notFound();

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
  const ballot = await db.ballots.create({
    data: {
      election_id: election.id,
      user_id,
      used_at: new Date(),
      is_used: true,
    },
  });

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
  await db.votes.create({
    data: {
      election_id: election.id,
      ballot_proof: ballotHash,
      proposition_proof: propositionHash,
      validation_proof: validationHash,
    },
  });

  // Return the ballot
  return c.json(ballot);
})

// Start a pending election
router.put("/:election_id/start", isAdminOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { db } = c.var;

  // Fin the sepcific election if the user is an admin of the team
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the election is not found
  if (!election)
    return c.notFound();

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
  });

  // Return no content status
  return c.body(null, 204);
})

// Stop an active election
router.put("/:election_id/stop", isAdminOfTeam, async (c) => {
  const { election_id, team_id } = c.req.param();
  const { db } = c.var;

  // Find the specific election if the user is an admin of the team
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the election is not found
  if (!election)
    return c.notFound();

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
  });

  // Return no content status
  return c.body(null, 204);
});

export default router;
