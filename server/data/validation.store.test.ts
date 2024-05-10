import type { Validation, ValidationStore } from "./validation.store";

const db = new Set<Validation>();

const validationStore: ValidationStore = {
  create: async (
    election_id: string,
    is_votes_valid: boolean,
    is_propositions_valid: boolean,
    is_ballots_valid: boolean,
    proof: string
  ) => {
    const validation = {
      id: `test_validation_${db.size + 1}`,
      election_id,
      is_votes_valid,
      is_propositions_valid,
      is_ballots_valid,
      proof,
    };

    db.add(validation);
    return validation;
  },
  findFirst: async (election_id: string) => {
    return Array.from(db).find(
      (validation) => validation.election_id === election_id
    ) || null;
  },
};

export default validationStore;
