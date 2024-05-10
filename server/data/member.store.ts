import { db } from "@/prisma/db.injector";

export type Member = {
  id: string;
  team_id: string;
  user_id: string;
  is_admin: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
};

export type MemberStore = {
  create: (
    team_id: string,
    user_id: string,
    is_admin: boolean
  ) => Promise<Member>;
  findById: (member_id: string) => Promise<Member | null>;
  findFirst: (team_id: string, user_id: string) => Promise<Member | null>;
  findMany: (team_id: string) => Promise<Member[]>;
  update: (
    member_id: string,
    user_id: string,
    is_admin: boolean
  ) => Promise<Member | null>;
  delete: (member_id: string) => Promise<Member | null>;
};

const invitationStore: MemberStore = {
  create: async (
    team_id: string,
    user_id: string,
    is_admin: boolean
  ) => {
    return db.teamMembers.create({
      data: {
        team_id,
        user_id,
        is_admin,
      }
    });
  },
  findById: async (member_id: string) => {
    return db.teamMembers.findFirst({
      where: {
        id: member_id,
        is_deleted: {
          not: true,
        },
      },
    });
  },
  findFirst: async (team_id: string, user_id: string) => {
    return db.teamMembers.findFirst({
      where: {
        team_id,
        user_id,
        is_deleted: {
          not: true,
        },
      },
    });
  },
  findMany: async (team_id: string) => {
    return db.teamMembers.findMany({
      where: {
        team_id,
        is_deleted: {
          not: true,
        },
      },
    });
  },
  update: async (
    member_id: string,
    user_id: string,
    is_admin: boolean
  ) => {
    return db.teamMembers.update({
      where: {
        id: member_id,
        user_id: {
          not: user_id,
        }
      },
      data: {
        is_admin,
      },
    });
  },
  delete: async (member_id: string) => {
    return db.teamMembers.update({
      where: {
        id: member_id,
      },
      data: {
        is_deleted: true,
      },
    });
  },
};

export default invitationStore;
