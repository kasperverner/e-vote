import factory from "../factory";
import type { User } from "./members.test";

export type Election = {
  id: string;
  team_id: string;
  name: string;
  description: string | null;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
  start_at: Date;
  end_at: Date;
  propositions: Proposition[];
  ballots: Ballot[];
  votes: Vote[];
  validations: ElectionValidation | null;
  validation_id: string | null;
};

export type ElectionValidation = {
  id: string;
  election_id: string;
  created_at: Date;
  is_ballots_valid: boolean;
  is_propositions_valid: boolean;
  is_votes_valid: boolean;
  proof: string;
};


export type Proposition = {
  id: string;
  election_id: string;
  name: string;
  description: string | null;
};

export type Ballot = {
  id: string;
  election_id: string;
  user_id: string;
  user: User;
  is_used: boolean;
  used_at: Date | null;
};

export type Vote = {
  id: string;
  election_id: string;
  created_at: Date;
  ballot_proof: string;
  proposition_proof: string;
  validation_proof: string;
};

const election_db = new Set<Election>();
const ballot_db = new Set<Ballot>();
const vote_db = new Set<Vote>();

export const getElectionsHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Find all elections for the team that are not deleted if the current user is a member
    const elections = Array.from(election_db).filter(election =>
      election.team_id === team_id
      && !election.is_deleted
    );

    // Return the list of elections
    return c.json(
      elections.map(({ ballots, ...rest }) => ({
        ...rest,
        has_voted: ballots.filter(ballot => ballot.user_id == user_id).length > 0,
      }))
    );
  }
);

export const createElectionHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { name, description, start_at, end_at, propositions } =
      await c.req.json();

    // Create a new election for the team if the current user is an admin
    const election: Election = {
      id: `election-${election_db.size + 1}`,
      team_id,
      name,
      description,
      is_deleted: false,
      created_at: new Date(),
      updated_at: null,
      start_at,
      end_at,
      propositions: (propositions as {name: string, description: string | null}[]).map((proposition, index) => ({
        id: `proposition-${index + 1}`,
        election_id: `election-${election_db.size + 1}`,
        name: proposition.name,
        description: proposition.description,
      })),
      ballots: [],
      votes: [],
      validations: null,
      validation_id: null,
    };

    election_db.add(election);

    // Return the new election
    return c.json(election, 201);
  }
);

export const getElectionHandler = factory.createHandlers(
  async (c) => {
    const { election_id, team_id } = c.req.param();
    const { user_id } = c.var;

    // Find a specific election for the team that is not deleted if the current user is a member
    const election = Array.from(election_db).find(el =>
      el.id === election_id
      && el.team_id === team_id
      && !el.is_deleted
    );

    // Return not found status if the election is not found
    if (!election) return c.notFound();

    // Extract the ballots from the election
    const { ballots, ...rest } = election;

    // Return the election with a flag indicating if the current user has voted
    return c.json({
      ...rest,
      has_voted: ballots.filter(ballot => ballot.user_id == user_id && ballot.is_used).length > 0,
    });
  }
);

export const updateElectionHandler = factory.createHandlers(
  async (c) => {
    const { election_id, team_id } = c.req.param();
    const { name, description, start_at, end_at, propositions } =
      await c.req.json();

    // check if the election exists and has not started
    const election = Array.from(election_db).find(el =>
      el.id === election_id
      && el.team_id === team_id
      && !el.is_deleted
      && el.start_at > new Date()
    );

    // Return not found status if the election is not found
    if (!election) return c.notFound();

    // Return no content status
    return c.body(null, 204);
  }
);

export const deleteElectionHandler = factory.createHandlers(
  async (c) => {
    const { election_id, team_id } = c.req.param();

    // check if the election exists
    const election = Array.from(election_db).find(el =>
      el.id === election_id
      && el.team_id === team_id
      && !el.is_deleted
    );

    // Return not found status if the election is not found
    if (!election) return c.notFound();

    // Delete the election
    election.is_deleted = true;
    election.updated_at = new Date();

    // Return no content status
    return c.body(null, 204);
  }
);

export const getResultsHandler = factory.createHandlers(
  async (c) => {
    const { election_id } = c.req.param();

    // Get election result from the proposition service
    const electionVotes = Array.from(vote_db).filter(el => el.id === election_id );

    const result = electionVotes.reduce((acc, { proposition_proof }) => {
      if (!acc.has(proposition_proof)) {
        acc.set(proposition_proof, 0);
      }

      acc.set(proposition_proof, acc.get(proposition_proof)! + 1);
      return acc;
    }, new Map<string, number>());

    // Return the election result
    return c.json(result);
  }
);

export const getValidationHandler = factory.createHandlers(async (c) =>
  c.body(null, 204)
);

export const createVoteHandler = factory.createHandlers(
  async (c) => {
    const { election_id, team_id } = c.req.param();
    const { proposition_id } = await c.req.json();
    const { user_id } = c.var;

    // Check if the election exists and is active
    const election = Array.from(election_db).find(el =>
      el.id === election_id
      && el.team_id === team_id
      && !el.is_deleted
    );

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
    const ballot: Ballot = {
      id: `ballot-${ballot_db.size + 1}`,
      election_id,
      user_id,
      user: {
        id: user_id,
        principalId: "user",
        name: "John Doe",
        email: "",
      },
      is_used: true,
      used_at: new Date(),
    };

    ballot_db.add(ballot);

    // Create a new vote with the proofs
    const vote: Vote = {
      id: `vote-${vote_db.size + 1}`,
      election_id,
      created_at: new Date(),
      ballot_proof: ballot.id,
      proposition_proof: proposition_id,
      validation_proof: ballot.id + proposition_id,
    };

    vote_db.add(vote);

    // Return the ballot
    return c.json(ballot);
  }
);

export const startElectionHandler = factory.createHandlers(
  async (c) => {
    const { election_id, team_id } = c.req.param();

    // Fin the sepcific election if the user is an admin of the team
    const election = Array.from(election_db).find(el =>
      el.id === election_id
      && el.team_id === team_id
      && !el.is_deleted
    );

    // Return not found status if the election is not found
    if (!election) return c.notFound();

    // Return an error if the election has already started
    if (election.start_at < new Date())
      return c.json(
        { message: `Election with ID ${election_id} has already started` },
        400
      );

    // Update the election to start now
    election.start_at = new Date();

    // Return no content status
    return c.body(null, 204);
  }
);

export const endElectionHandler = factory.createHandlers(
  async (c) => {
    const { election_id, team_id } = c.req.param();

    // Find the specific election if the user is an admin of the team
    const election = Array.from(election_db).find(el =>
      el.id === election_id
      && el.team_id === team_id
      && !el.is_deleted
    );

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
    election.end_at = new Date();

    // Return no content status
    return c.body(null, 204);
  }
);
