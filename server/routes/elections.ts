import type { Environment } from "@/server/environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";
import isElegibleToVote from "../middleware/isElegibleToVote";
import isEligibleToEditElection from "../middleware/isEligibleToEditElection";
import ballotClient from '@/services/ballot-service/client'
import propositionClient from '@/services/proposition-service/client'
import validationClient from '@/services/validation-service/client'

const router = new Hono<Environment>()
  .basePath("/:team_id/elections")
  // Get all elections for a team
  .get("/", isMemberOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { user_id, db } = c.var;

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

    return c.json(
      elections.map(({ ballots, ...rest }) => ({
        ...rest,
        has_voted: ballots.length > 0,
      }))
    );
  })
  // Create a new election for a team
  .post("/", isAdminOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { name, description, start_at, end_at, propositions } =
      await c.req.json();
    const { db } = c.var;

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

    return c.json(election, 201);
  })
  // Get a specific election for a team
  .get("/:election_id", isMemberOfTeam, async (c) => {
    const { election_id, team_id } = c.req.param();
    const { user_id, db } = c.var;

    const election = await db.elections.findUnique({
      where: {
        id: election_id,
        team_id,
        is_deleted: {
          not: true,
        },
      },
      include: {
        ballots: {
          where: {
            user_id,
          },
        },
        propositions: true,
      },
    });

    if (!election) return c.notFound();

    const { ballots, ...rest } = election;

    return c.json({
      ...rest,
      has_voted: ballots.length > 0,
    });
  })
  // Update a specific election for a team
  .put("/:election_id", isAdminOfTeam, isEligibleToEditElection, async (c) => {
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

    if (!election)
      return c.json(
        { message: `Election with ID ${election_id} not found` },
        404
      );

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

    return c.body(null, 204);
  })
  // Delete a specific election for a team
  .delete("/:election_id", isAdminOfTeam, async (c) => {
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

    if (!election)
      return c.json(
        { message: `Election with ID ${election_id} not found` },
        404
      );

    await db.elections.update({
      where: {
        id: election.id,
      },
      data: {
        is_deleted: true,
      },
    });

    return c.body(null, 204);
  })
  // Get the result for an election
  .get("/:election_id/result", isMemberOfTeam, async (c) => {
    const { election_id } = c.req.param();

    const request = await propositionClient.api.results.election[
      ":election_id"
    ].$get({
      param: {
        election_id,
      },
    });

    if (!request.ok)
      return c.json(
        {
          message: `Election with ID ${election_id} could not generate result`,
        },
        404
      );

    const response = await request.json();

    return c.json(response);
  })
  // Get the validation for an election
  .get("/:election_id/validation", isMemberOfTeam, async (c) => {
    const { election_id, team_id } = c.req.param();
    const { db } = c.var;

    const electionValidation = await db.electionValidation.findFirst({
      where: {
        election_id,
      },
    });

    // If no validation is found, return not found
    if (!electionValidation)
      return c.notFound();

    const proofRequest = await ballotClient.api.proofs[":value"].$get({
      param: {
        value: electionValidation.election_id + electionValidation.is_votes_valid + electionValidation.is_propositions_valid + electionValidation.is_ballots_valid,
      }
    });

    const { hash: proofHash } = await proofRequest.json();

    const { proof, ...rest } = electionValidation;

    // If the proof does not match the validation proof, return an error
    if (proofHash !== electionValidation.proof)
      return c.text( `Proof for election with ID ${election_id} is invalid`,
        400
      );

    return c.json(rest);
  })
  // Vote on a proposition for an election
  .post("/:election_id/vote", isMemberOfTeam, isElegibleToVote, async (c) => {
    const { election_id, team_id } = c.req.param();
    const { proposition_id } = await c.req.json();
    const { user_id, db } = c.var;

    const election = await db.elections.findUnique({
      where: {
        id: election_id,
        team_id,
        is_deleted: {
          not: true,
        }
      },
    });

    if (!election)
      return c.json(
        { message: `Election with ID ${election_id} is not found` },
        400
      );

    if (election.start_at > new Date())
      return c.json(
        { message: `Election with ID ${election_id} has not started yet` },
        400
      );

    if (election.end_at < new Date())
      return c.json(
        { message: `Election with ID ${election_id} has already ended` },
        400
      );

    const ballot = await db.ballots.create({
      data: {
        election_id: election.id,
        user_id,
        used_at: new Date(),
        is_used: true,
      },
    });

    const ballotProof = await ballotClient.api.proofs[":value"].$get({
      param: {
        value: ballot.id,
      }
    });
    const { hash: ballotHash } = await ballotProof.json();

    const propositionProof = await propositionClient.api.proofs[":value"].$get({
      param: {
        value: proposition_id,
      }
    });
    const { hash: propositionHash } = await propositionProof.json();

    const validationProof = await validationClient.api.proofs[":first"][":second"].$get({
      param: {
        first: ballotHash,
        second: propositionHash,
      }
    });
    const { hash: validationHash } = await validationProof.json();

    await db.votes.create({
      data: {
        election_id: election.id,
        ballot_proof: ballotHash,
        proposition_proof: propositionHash,
        validation_proof: validationHash,
      },
    });

    return c.json(ballot);
  })
  // Start a pending election
  .put("/:election_id/start", isAdminOfTeam, async (c) => {
    const { election_id, team_id } = c.req.param();
    const { db } = c.var;

    const election = await db.elections.findUnique({
      where: {
        id: election_id,
        team_id,
        is_deleted: {
          not: true,
        },
      },
    });

    if (!election)
      return c.json(
        { message: `Election with ID ${election_id} is not found` },
        404
      );

    if (election.start_at < new Date())
      return c.json(
        { message: `Election with ID ${election_id} has already started` },
        400
      );

    await db.elections.update({
      where: {
        id: election.id,
      },
      data: {
        start_at: new Date(),
      },
    });

    return c.body(null, 204);
  })
  // Stop an active election
  .put("/:election_id/stop", isAdminOfTeam, async (c) => {
    const { election_id, team_id } = c.req.param();
    const { db } = c.var;

    const election = await db.elections.findUnique({
      where: {
        id: election_id,
        team_id,
        is_deleted: {
          not: true,
        },
      },
    });

    if (!election)
      return c.json(
        { message: `Election with ID ${election_id} is not found` },
        404
      );

    if (election.start_at > new Date())
      return c.json(
        { message: `Election with ID ${election_id} has not started yet` },
        400
      );

    if (election.end_at > new Date())
      return c.json(
        { message: `Election with ID ${election_id} has already ended` },
        400
      );

    await db.elections.update({
      where: {
        id: election.id,
      },
      data: {
        end_at: new Date(),
      },
    });

    return c.body(null, 204);
  });

export default router;
