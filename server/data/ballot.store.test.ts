import type { Ballot, BallotStore } from "./ballot.store";

const db = new Set<Ballot>();

const ballotStore: BallotStore = {
  create: async (user_id: string, election_id: string) => {
    const ballot = {
      id: `test_ballot_${db.size + 1}`,
      user_id,
      election_id,
      is_used: true,
      used_at: new Date(),
    };

    db.add(ballot);
    return ballot;
  },
  findFirst: async (user_id: string, election_id: string) => {
    return (
      Array.from(db).find(
        (ballot) =>
          ballot.user_id === user_id &&
          ballot.election_id === election_id &&
          ballot.is_used
      ) || null
    );
  },
  findMany: async (election_id: string) => {
    return Array.from(db).filter(
      (ballot) => ballot.election_id === election_id
    );
  },
};

export default ballotStore;