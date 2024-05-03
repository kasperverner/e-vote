export type Team = {
  id: string;
  name: string;
  created_at: string;
  _count: {
    members: number;
  };
  isAdmin?: boolean;
};