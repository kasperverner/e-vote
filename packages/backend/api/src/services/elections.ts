import { RequestHandler } from "express";
import db from "../utilities/db.server";
import { generateBallotProof, validateBallotProofsForElection } from "../utilities/ballotClient";
import { generatePropositionProof, validatePropositionProofsForElection, getResultForElection } from "../utilities/propositionClient";
import { generateValidationProof, validateValidationProofsForElection } from "../utilities/validationClient";

/**
 * Get all elections of the team
 * @param team_id: string
 * @param user_id: string
 * @returns elections: Election[]
 */
export const getElections: RequestHandler = async (req, res) => {
  const { team_id } = req.params;
  const { user_id } = res.locals;

  const elections = await db.elections.findMany({
    where: {
      team_id,
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

  return res.json(elections);
};

/**
 * Get election by id
 * @param election_id: string
 * @param team_id: string
 * @returns election: Election
 */
export const getElection: RequestHandler = async (req, res) => {
  const { election_id, team_id } = req.params;

  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
    },
  });

  return res.json(election);
};

/**
 * Vote in an election
 * @param election_id: string
 * @param team_id: string
 * @param user_id: string
 * @returns ballot: Ballot
 */
export const voteInElection: RequestHandler = async (req, res) => {
  const { election_id, team_id } = req.params;
  const { proposition_id } = req.body;
  const { user_id } = res.locals;

  try {
    // check if the election exists and is open
    const election = await db.elections.findUnique({
      where: {
        id: election_id,
        team_id,
      },
    });

    if (!election) {
      return res
        .status(404)
        .json({ message: `Election with ID ${election_id} not found` });
    }

    if (election.start_at > new Date()) {
      return res
        .status(400)
        .json({
          message: `Election with ID ${election_id} has not started yet`,
        });
    }

    if (election.end_at && election.end_at < new Date()) {
      return res
        .status(400)
        .json({
          message: `Election with ID ${election_id} has already ended`,
        });
    }

    // Add the ballot
    const ballot = await db.ballots.create({
      data: {
        election_id: election.id,
        user_id,
        used_at: new Date(),
        is_used: true,
      },
    });

    const ballotProof = await generateBallotProof(ballot.id);
    const propositionProof = await generatePropositionProof(proposition_id);
    const validationProof = await generateValidationProof(ballotProof, propositionProof);

    const vote = await db.votes.create({
      data: {
        election_id: election.id,
        ballot_proof: ballotProof,
        proposition_proof: propositionProof,
        validation_proof: validationProof,
      },
    });

    return res.json(ballot);
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get election results
 * @param election_id: string
 * @param team_id: string
 * @returns election: Election
 */
export const getElectionResults: RequestHandler = async (req, res) => {
  const { election_id, team_id } = req.params;

  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
    },
  });

  if (!election) {
    return res
      .status(404)
      .json({ message: `Election with ID ${election_id} not found` });
  }

  var validationResult = await validateValidationProofsForElection(election_id);

  if (!validationResult.success) {
    return res.status(400).json(validationResult.message);
  }

  var propositionResult = await validatePropositionProofsForElection(election_id);

  if (!propositionResult.success) {
    return res.status(400).json(propositionResult.message);
  }

  var ballotResult = await validateBallotProofsForElection(election_id);

  if (!ballotResult.success) {
    return res.status(400).json(ballotResult.message);
  }

  var result = await getResultForElection(election_id);

  if (!result.results)
    return res.status(400).json(result.message);

  return res.status(200).json(result.results);
};

/**
 * Create a new election
 * @param team_id: string
 * @param name: string
 * @param description: string
 * @param start_at: Date
 * @param end_at: Date
 * @param propositions: Proposition[]
 * @returns election: Election
 */
export const createElection: RequestHandler = async (req, res) => {
  const { team_id } = req.params;
  const { name, description, start_at, end_at, propositions } = req.body;

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

  return res.json(election);
};

/**
 * Edit an election
 * @param election_id: string
 * @param team_id: string
 * @param name: string
 * @param description: string
 * @param start_at: Date
 * @param end_at: Date
 * @param propositions: Proposition[]
 * @returns 204
 */
export const editElection: RequestHandler = async (req, res) => {
  const { election_id, team_id } = req.params;
  const { name, description, start_at, end_at, propositions } = req.body;

  // check if the election exists and has not started
  const election = await db.elections.findUnique({
    where: {
      id: election_id,
      team_id,
    },
  });

  if (!election) {
    return res
      .status(404)
      .json({ message: `Election with ID ${election_id} not found` });
  }

  if (election.start_at < new Date()) {
    return res
      .status(400)
      .json({ message: `Election with ID ${election_id} has already started` });
  }

  // update the election
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

  return res.status(204).send();
};