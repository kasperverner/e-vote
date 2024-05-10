import { db } from "@/prisma/db.injector";

export type Vote = {
  election_id: string;
  created_at: Date;
  ballot_proof: string;
  proposition_proof: string;
  validation_proof: string;
};

export type VoteStore = {
  create: (
    election_id: string,
    ballot_proof: string,
    proposition_proof: string,
    validation_proof: string
  ) => Promise<Vote>;
  findMany: (election_id: string) => Promise<Vote[]>;
  groupByProposition: (election_id: string) => Promise<Map<string, number>>;
};

const voteStore: VoteStore = {
  create: async (
    election_id: string,
    ballot_proof: string,
    proposition_proof: string,
    validation_proof: string
  ) => {
    return db.votes.create({
      data: {
        election_id,
        ballot_proof,
        proposition_proof,
        validation_proof,
      },
    });
  },
  findMany: async (election_id: string) => {
    return db.votes.findMany({
      where: {
        election_id,
      },
    });
  },
  groupByProposition: async (election_id: string) => {
    const votes = await db.votes.groupBy({
      by: ["proposition_proof"],
      _count: {
        proposition_proof: true,
      },
      where: {
        election_id,
      },
    });

    // Create a map to store the vote count for each proposition to be able to use the Map.get() method
    const tally = votes.reduce((map, { proposition_proof, _count }) => {
      return map.set(proposition_proof, _count.proposition_proof);
    }, new Map<string, number>());

    return tally;
  },
};

export default voteStore;
