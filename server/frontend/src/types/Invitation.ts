export type Invitation = {
  id: string;
  state: 'PENDING' | 'ACCEPTED' | 'DECLINED';
  email: string;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date | null;
  team_name: string;
  invited_by: string;
};