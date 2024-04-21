import { RequestHandler } from "express";
import db from "../utilities/db.server";

// get all elections of the team
// include if the user has voted in the election
export const getElections: RequestHandler = async (req, res) => {
  const { team_id, user_id } = req.params;

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

// get election by slug if the user is a member of the team
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

// vote in an election if the user is elegible to vote
export const voteInElection: RequestHandler = async (req, res) => {
  const { election_id, team_id, user_id } = req.params;

  try {
    // check if the election is open
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

    // TODO: get the ballot proof from the ballot-service
    const ballotProof = "proof of ballot";

    // TODO: get the proposition proof from the proposition-service
    const propositionProof = "proof of proposition";

    // TODO: get the validation proof from the validation-service
    const validationProof = "proof of validation";

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
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get election results by election_id
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

  // TODO: validate the votes
  // TODO: get the results from the proposition-service

  return res.json(election);
};

// create a new election
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

// edit a pending election
export const editElection: RequestHandler = async (req, res) => {
  const { election_id, team_id } = req.params;
  const { name, description, start_at, end_at, propositions } = req.body;

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