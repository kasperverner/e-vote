export type Election = {
  id: string;
  team_id: string;
  name: string;
  description?: string;
  created_at: string;
  start_at: string;
  end_at: string;
  has_voted?: boolean;
  is_deleted: boolean;
  // propositions: Proposition[];
  // ballots: Ballot[];
};