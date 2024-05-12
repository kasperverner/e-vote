import factory from "../factory";
import type { Team } from "./teams.test";

export type User = {
  id: string;
  principalId: string;
  name: string;
  email: string;
};

export type Member = {
  id: string;
  team_id: string;
  user_id: string;
  user: User;
  is_admin: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
};

export type Invitation = {
  id: string;
  team: Team;
  team_id: string;
  state: string;
  invited_by_member: Member;
  invited_by_member_id: string;
  email: string;
  is_admin: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
};

const members_db = new Set<Member>();
const invitations_db = new Set<Invitation>();

export const getMembersHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Find all members of the team that are not deleted if the current user is a member
    const members = Array.from(members_db).filter(
      (member) => member.team_id === team_id && member.is_deleted === false
    );

    // Return the list of members
    return c.json(
      members?.map((member) => ({
        id: member.id,
        name: member.user.name,
        email: member.user.email,
        is_admin: member.is_admin,
        is_current_user: member.user.id === user_id,
        created_at: member.created_at,
      }))
    );
  }
);

export const updateMemberHandler = factory.createHandlers(
  async (c) => {
    const { member_id, team_id } = c.req.param();
    const { isAdmin } = await c.req.json();
    const { user_id } = c.var;

    const currentUserIsAdmin = !!Array.from(members_db).find(
      (member) =>
        member.team_id === team_id &&
        member.user_id === user_id &&
        member.is_deleted === false &&
        member.is_admin === true
    );

    // Return forbidden status if the current user is not an admin
    if (!currentUserIsAdmin)
      return c.json({ message: "Forbidden" }, 403);

    // Update the role of the member if the current user is an admin
    // and the member is not the current user
    const teamMember = Array.from(members_db).find(
      (member) => member.id === member_id && member.is_deleted === false && member.user_id !== user_id
    );

    // Return not found status if the member is not found
    if (!teamMember)
      return c.notFound();

    // Update the member
    teamMember.is_admin = isAdmin;

    // Return no content status
    return c.body(null, 204);
  }
);

export const deleteMemberHandler = factory.createHandlers(
  async (c) => {
    const { member_id, team_id } = c.req.param();
    const { isAdmin } = await c.req.json();
    const { user_id } = c.var;

    const currentUserIsAdmin = !!Array.from(members_db).find(
      (member) =>
        member.team_id === team_id &&
        member.user_id === user_id &&
        member.is_deleted === false &&
        member.is_admin === true
    );

    // Return forbidden status if the current user is not an admin
    if (!currentUserIsAdmin) return c.json({ message: "Forbidden" }, 403);

    // Mark the member as deleted if the current user is an admin
    // and the member is not the current user
    const teamMember = Array.from(members_db).find(
      (member) =>
        member.id === member_id &&
        member.is_deleted === false &&
        member.user_id !== user_id
    );

    // Return not found status if the member is not found
    if (!teamMember) return c.notFound();

    // Update the member
    teamMember.is_admin = isAdmin;

    // Return no content status
    return c.body(null, 204);
  }
);

export const leaveTeamHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Mark the the team member as deleted if the current user is a member
    const teamMember = Array.from(members_db).find(
      (member) =>
        member.team_id === team_id &&
        member.user_id !== user_id &&
        member.is_deleted === false
    );

    // Return not found status if the member is not found
    if (!teamMember) return c.notFound();

    // Update the member
    teamMember.is_deleted = true;

    // Return no content status
    return c.body(null, 204);
  }
);

// Invitations
export const getInvitationsHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    const currentUserIsAdmin = !!Array.from(members_db).find(
    (member) =>
      member.team_id === team_id &&
      member.user_id === user_id &&
      member.is_deleted === false &&
      member.is_admin === true
    );

    // Return forbidden status if the current user is not an admin
    if (!currentUserIsAdmin)
      return c.json({ message: "Forbidden" }, 403);

    // Find all invitations for the team that are not deleted
    const invitations = Array.from(invitations_db).filter(invitation => invitation.team_id === team_id && invitation.is_deleted === false)

    const response = invitations.map((invitation) => ({
      id: invitation.id,
      state: invitation.state,
      email: invitation.email,
      is_admin: invitation.is_admin,
      team_name: invitation.team.name,
      invited_by: invitation.invited_by_member.user.name,
      created_at: invitation.created_at,
      updated_at: invitation.updated_at,
    }));

    // Return the list of invitations
    return c.json(response);
  }
);

export const createInvitationHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { email, isAdmin } = await c.req.json();
    const { user_id } = c.var;

    const currentUserIsAdmin = !!Array.from(members_db).find(
      (member) =>
        member.team_id === team_id &&
        member.user_id === user_id &&
        member.is_deleted === false &&
        member.is_admin === true
    );

    // Return forbidden status if the current user is not an admin
    if (!currentUserIsAdmin) return c.json({ message: "Forbidden" }, 403);

    // Find the member that is creating the invitation
    const member = Array.from(members_db).find(mem => mem.team_id === team_id && mem.user_id === user_id && mem.is_deleted === false);

    // return not found status if the member is not found
    if (!member) return c.notFound();

    // Create an invitation for the team
    const invitation = {
      id: `invitation-${invitations_db.size + 1}`,
      team_id,
      state: "PENDING",
      invited_by_member: member,
      invited_by_member_id: member.id,
      email,
      is_admin: isAdmin,
      is_deleted: false,
      created_at: new Date(),
      updated_at: null,
    };

    // TODO: Send an email to the invited user

    // Return the invitation
    return c.json(invitation);
  }
);

export const getInvitationHandler = factory.createHandlers(
async (c) => {
    const { team_id, invitation_id } = c.req.param();

    // Find the invitation for the team that is not deleted
    const invitation = Array.from(invitations_db)
      .find(inv => inv.id === invitation_id && inv.team_id === team_id && inv.is_deleted === false && inv.state === "PENDING");

    // Return not found status if the invitation is not found
    if (!invitation) return c.notFound();

    const response = {
      id: invitation.id,
      state: invitation.state,
      email: invitation.email,
      is_admin: invitation.is_admin,
      team_name: invitation.team.name,
      invited_by: invitation.invited_by_member.user.name,
      created_at: invitation.created_at,
      updated_at: invitation.updated_at,
    };

    // Return the invitation
    return c.json(response);
  }
);

export const updateInvitationHandler = factory.createHandlers(
  async (c) => {
    const { invitation_id, team_id } = c.req.param();
    const { isAdmin } = await c.req.json();
    const { user_id } = c.var;

    const currentUserIsAdmin = !!Array.from(members_db).find(
      (member) =>
        member.team_id === team_id &&
        member.user_id === user_id &&
        member.is_deleted === false &&
        member.is_admin === true
    );

    // Return forbidden status if the current user is not an admin
    if (!currentUserIsAdmin) return c.json({ message: "Forbidden" }, 403);

    // Update the invitation if the current user is an admin
    const invitation = Array.from(invitations_db).find(
      (inv) =>
        inv.id === invitation_id &&
        inv.team_id === team_id &&
        inv.is_deleted === false &&
        inv.state === "PENDING"
    );

    // Return not found status if the invitation is not found
    if (!invitation) return c.notFound();

    // Update the invitation
    invitation.is_admin = isAdmin;
    invitation.updated_at = new Date();

    // Return no content status
    return c.body(null, 204);
  }
);

export const deleteInvitationHandler = factory.createHandlers(
  async (c) => {
    const { invitation_id, team_id } = c.req.param();
    const { user_id } = c.var;

    const currentUserIsAdmin = !!Array.from(members_db).find(
      (member) =>
        member.team_id === team_id &&
        member.user_id === user_id &&
        member.is_deleted === false &&
        member.is_admin === true
    );

    // Return forbidden status if the current user is not an admin
    if (!currentUserIsAdmin) return c.json({ message: "Forbidden" }, 403);

    // Mark the invitation as deleted if the current user is an admin
    const invitation = Array.from(invitations_db).find(
      (inv) =>
        inv.id === invitation_id &&
        inv.team_id === team_id &&
        inv.is_deleted === false &&
        inv.state === "PENDING"
    );

    // Return not found status if the invitation is not found
    if (!invitation) return c.notFound();

    // Delete the invitation
    invitation.is_deleted = true;
    invitation.updated_at = new Date();

    // Return no content status
    return c.body(null, 204);
  }
);

// Accept/Decline Invitations
export const acceptInvitationHandler = factory.createHandlers(async (c) => {
  const { invitation_id, team_id } = c.req.param();
  const { user_id } = c.var;

  // Find the invitation that is pending and not deleted
  const invitation = Array.from(invitations_db).find(
      (inv) =>
        inv.id === invitation_id &&
        inv.team_id === team_id &&
        inv.is_deleted === false &&
        inv.state === "PENDING"
    );

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Find if the user is already a member of the team
  const existingMember = Array.from(members_db).find(mem =>
    mem.team_id === team_id && mem.user_id === user_id && mem.is_deleted === false);

  // Return bad request status if the user is already a member of the team
  if (existingMember)
    return c.json({ message: "User is already a member of the team" }, 400);

  // Create a team member for the user
  const teamMember: Member = {
    id: `member-${members_db.size + 1}`,
    team_id,
    user_id,
    user: {
      id: user_id,
      principalId: `principal-${user_id}`,
      name: "User Name",
      email: invitation.email,
    },
    is_admin: invitation.is_admin,
    is_deleted: false,
    created_at: new Date(),
    updated_at: null,
  };

  // Update the invitation to accepted
  invitation.state = "ACCEPTED";
  invitation.updated_at = new Date();

  // Return the team member
  return c.json(teamMember, 201);
});

export const declineInvitationHandler = factory.createHandlers(async (c) => {
  const { invitation_id, team_id } = c.req.param();

  // Find the invitation that is pending and not deleted
  const invitation = Array.from(invitations_db).find(
    (inv) =>
      inv.id === invitation_id &&
      inv.team_id === team_id &&
      inv.is_deleted === false &&
      inv.state === "PENDING"
  );

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Update the invitation to declined
  invitation.state = "DECLINED";
  invitation.updated_at = new Date();

  // Return no content status
  return c.body(null, 204);
});
