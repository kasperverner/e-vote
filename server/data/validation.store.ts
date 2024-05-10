import { db } from "@/prisma/db.injector";

export type Validation = {
  id: string;
  election_id: string;
  is_votes_valid: boolean;
  is_propositions_valid: boolean;
  is_ballots_valid: boolean;
  proof: string;
};

export type ValidationStore = {
  create: (
    election_id: string,
    is_votes_valid: boolean,
    is_propositions_valid: boolean,
    is_ballots_valid: boolean,
    proof: string
  ) => Promise<Validation>;
  findFirst: (election_id: string) => Promise<Validation | null>;
};

const validationStore: ValidationStore = {
  create: async (
    election_id: string,
    is_votes_valid: boolean,
    is_propositions_valid: boolean,
    is_ballots_valid: boolean,
    proof: string
  ) => {
    return db.electionValidation.create({
      data: {
        election_id,
        is_votes_valid,
        is_propositions_valid,
        is_ballots_valid,
        proof,
      },
    });
  },
  findFirst: async (election_id: string) => {
    return db.electionValidation.findFirst({
      where: {
        election_id,
      },
    });
  },
};

export default validationStore;
