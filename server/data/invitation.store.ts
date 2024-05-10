import { db } from "@/prisma/db.injector";

export type Invitation = {
  id: string;
  team_id: string;
  state: string;
  invited_by_member_id: string;
  email: string;
  is_admin: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
};

export type InvitationStore = {
  create: (
    team_id: string,
    invited_by_member_id: string,
    email: string,
    is_admin: boolean
  ) => Promise<Invitation>;
  findFirst: (
    team_id: string,
    invitation_id: string
  ) => Promise<Invitation | null>;
  findFirstPending: (team_id: string, invitation_id: string) => Promise<Invitation | null>;
  findMany: (team_id: string) => Promise<Invitation[]>;
  update: (
    invitation_id: string,
    is_admin: boolean
  ) => Promise<Invitation | null>;
  delete: (invitation_id: string) => Promise<Invitation | null>;
  accept: (invitation_id: string) => Promise<Invitation | null>;
  decline: (invitation_id: string) => Promise<Invitation | null>;
};

const invitationStore: InvitationStore = {
  create: async (
    team_id: string,
    invited_by_member_id: string,
    email: string,
    is_admin: boolean
  ) => {
    return db.invitations.create({
      data: {
        team_id,
        invited_by_member_id,
        email,
        is_admin,
      }
    });
  },
  findFirst: async (team_id: string, invitation_id: string) => {
    return db.invitations.findFirst({
      where: {
        team_id,
        id: invitation_id,
        is_deleted: {
          not: true,
        },
      },
    });
  },
  findFirstPending: async (team_id: string, invitation_id: string) => {
    return db.invitations.findFirst({
      where: {
        team_id,
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
    });
  },
  findMany: async (team_id: string) => {
    return db.invitations.findMany({
      where: {
        team_id,
        is_deleted: {
          not: true,
        },
      },
    });
  },
  update: async (invitation_id: string, is_admin: boolean) => {
    return db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
      data: {
        is_admin,
      },
    });
  },
  delete: async (invitation_id: string) => {
    return db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
      data: {
        is_deleted: true,
      },
    });
  },
  accept: async (invitation_id: string) => {
    return db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
      data: {
        state: "ACCEPTED",
      },
    });
  },
  decline: async (invitation_id: string) => {
    return db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
      data: {
        state: "DECLINED",
      },
    });
  },
};

export default invitationStore;
