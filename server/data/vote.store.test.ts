import type { Vote, VoteStore } from "./vote.store";

const db = new Set<Vote>();

const voteStore: VoteStore = {
  create: async (
    election_id: string,
    ballot_proof: string,
    proposition_proof: string,
    validation_proof: string
  ) => {
    const vote = {
      id: `test_vote_${db.size + 1}`,
      election_id,
      ballot_proof,
      proposition_proof,
      validation_proof,
      created_at: new Date(),
    };

    db.add(vote);
    return vote;
  },
  findMany: async (election_id: string) => {
    return Array.from(db).filter((vote) => vote.election_id === election_id);
  },
  groupByProposition: async (election_id: string) => {
    const votes = Array.from(db).filter(
      (vote) => vote.election_id === election_id
    );

    const tally = votes.reduce((map, { proposition_proof }) => {
      const count = map.get(proposition_proof) || 0;
      map.set(proposition_proof, count + 1);
      return map;
    }, new Map<string, number>());

    return tally;
  },
};

export default voteStore;
