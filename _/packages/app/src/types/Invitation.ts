export type Invitation = {
  id: string;
  email: string;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
  state: 'PENDING' | 'ACCEPTED' | 'DECLINED';
  team: {
    name: string;
  },
  invited_by_member: {
    user: {
      name: string;
    };
  };
};
