import { db } from "@/prisma/db.injector";

export type Ballot = {
  id: string;
  user_id: string;
  election_id: string;
  is_used: boolean;
  used_at: Date | null;
};

export type BallotStore = {
  create: (user_id: string, election_id: string) => Promise<Ballot>;
  findFirst: (user_id: string, election_id: string) => Promise<Ballot | null>;
  findMany: (election_id: string) => Promise<Ballot[]>;
};

const ballotStore: BallotStore = {
  create: async (user_id: string, election_id: string) => {
    return db.ballots.create({
      data: {
        user_id,
        election_id,
        is_used: true,
        used_at: new Date(),
      },
    });
  },
  findFirst: async (user_id: string, election_id: string) => {
    return db.ballots.findFirst({
      where: {
        user_id,
        election_id,
        is_used: true,
      },
    });
  },
  findMany: async (election_id: string) => {
    return db.ballots.findMany({
      where: {
        election_id,
      },
    });
  },
};

export default ballotStore;