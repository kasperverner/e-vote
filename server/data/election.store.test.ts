import type { Election, ElectionStore } from "./election.store";
import type { Proposition } from "./proposition.store";

const db = new Set<Election>();

const electionStore: ElectionStore = {
  isEligibleToEditElection: async (user_id: string, election_id: string) => {
    return (
      Array.from(db).find(
        (election) =>
          election.id === election_id &&
          election.team_id === user_id &&
          election.start_at > new Date()
      ) || null
    );
  },
  create: async (
    team_id: string,
    name: string,
    start_at: Date,
    end_at: Date,
    propositions: Proposition[],
    description: string | null = null
  ) => {
    const election = {
      id: `test_election_${db.size + 1}`,
      team_id,
      name,
      description,
      start_at,
      end_at,
      created_at: new Date(),
      updated_at: null,
      is_deleted: false,
      propositions,
      validation_id: null,
    };

    db.add(election);
    return election;
  },
  findFirst: async (team_id: string, election_id: string) => {
    return Array.from(db).find(
      (election) => election.id === election_id && election.team_id === team_id
    ) || null;
  },
  findMany: async (team_id: string) => {
    return Array.from(db).filter((election) => election.team_id === team_id);
  },
  update: async (
    election_id: string,
    team_id: string,
    name: string,
    start_at: Date,
    end_at: Date,
    propositions: Proposition[],
    description: string | null = null
  ) => {
    const election = Array.from(db).find(
      (election) => election.id === election_id && election.team_id === team_id
    );

    if (!election) {
      return null;
    }

    election.name = name;
    election.start_at = start_at;
    election.end_at = end_at;
    election.propositions = propositions;
    election.description = description || null;
    election.updated_at = new Date();

    return election;
  },
  delete: async (election_id: string) => {
    const election = Array.from(db).find((election) => election.id === election_id);

    if (!election) {
      return null;
    }

    election.is_deleted = true;
    return election;
  },
  start: async (election_id: string) => {
    const election = Array.from(db).find(
      (election) => election.id === election_id
    );

    if (!election) {
      return null;
    }

    if (election.start_at < new Date()) {
      return null;
    }

    election.start_at = new Date();
    return election;
  },
  end: async (election_id: string) => {
    const election = Array.from(db).find(
      (election) => election.id === election_id
    );

    if (!election) {
      return null;
    }

    if (election.start_at > new Date()) {
      return null;
    }

    if (election.end_at < new Date()) {
      return null;
    }

    election.end_at = new Date();
    return election;
  },
};

export default electionStore;
