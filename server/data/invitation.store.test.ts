import type { Invitation, InvitationStore } from "./invitation.store";

const db = new Set<Invitation>();

const invitationStore: InvitationStore = {
  create: async (
    team_id: string,
    invited_by_member_id: string,
    email: string,
    is_admin: boolean
  ) => {
    const invitation = {
      id: `test_invitation_${db.size + 1}`,
      team_id,
      invited_by_member_id,
      state: "PENDING",
      email,
      is_admin,
      is_deleted: false,
      created_at: new Date(),
      updated_at: null,
    };

    db.add(invitation);
    return invitation;
  },
  findFirst: async (team_id: string, invitation_id: string) => {
    return Array.from(db).find(
      (invitation) =>
        invitation.id === invitation_id &&
        invitation.team_id === team_id &&
        !invitation.is_deleted
    ) || null;
  },
  findFirstPending: async (team_id: string, invitation_id: string) => {
    return Array.from(db).find(
      (invitation) =>
        invitation.id === invitation_id &&
        invitation.team_id === team_id &&
        invitation.state === "PENDING" &&
        !invitation.is_deleted
    ) || null;
  },
  findMany: async (team_id: string) => {
    return Array.from(db).filter(
      (invitation) => invitation.team_id === team_id && !invitation.is_deleted
    );
  },
  update: async (invitation_id: string, is_admin: boolean) => {
    const invitation = Array.from(db).find(
      (invitation) => invitation.id === invitation_id && !invitation.is_deleted
    );

    if (!invitation) {
      return null;
    }

    invitation.is_admin = is_admin;
    invitation.updated_at = new Date();

    return invitation;
  },
  delete: async (invitation_id: string) => {
    const invitation = Array.from(db).find(
      (invitation) => invitation.id === invitation_id && !invitation.is_deleted
    );

    if (!invitation) {
      return null;
    }

    invitation.is_deleted = true;
    invitation.updated_at = new Date();

    return invitation;
  },
  accept: async (invitation_id: string) => {
    const invitation = Array.from(db).find(
      (invitation) => invitation.id === invitation_id && !invitation.is_deleted
    );

    if (!invitation) {
      return null;
    }

    invitation.state = "ACCEPTED";
    invitation.updated_at = new Date();

    return invitation;
  },
  decline: async (invitation_id: string) => {
    const invitation = Array.from(db).find(
      (invitation) => invitation.id === invitation_id && !invitation.is_deleted
    );

    if (!invitation) {
      return null;
    }

    invitation.state = "DECLINED";
    invitation.updated_at = new Date();

    return invitation;
  },

};

export default invitationStore;
