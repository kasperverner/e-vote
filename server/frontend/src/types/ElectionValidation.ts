export type ElectionValidation = {
  id: string;
  election_id: string;
  created_at: string;
  is_ballots_valid: boolean;
  is_propositions_valid: boolean;
  is_votes_valid: boolean;
};