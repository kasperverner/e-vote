import type { Environment } from "../environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";

/**
 * The router for the members endpoints.
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = new Hono<Environment>().basePath("/:team_id/members");

// Get all members of a team
router.get("/", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, data } = c.var;

  // Find all members of the team that are not deleted if the current user is a member
  const members = await data.members.findMany(team_id);

  const response = members.map(async (member) => {
    const user = await data.users.findFirst(member.user_id);
    return {
      id: member.id,
      name: user?.name,
      email: user?.email,
      is_admin: member.is_admin,
      is_user: member.user_id === user_id,
      created_at: member.created_at,
    };
  });

  // Return the list of members
  return c.json(response);
});

// Update the role of a member
router.put("/:member_id", isAdminOfTeam, async (c) => {
  const { member_id } = c.req.param();
  const { isAdmin } = await c.req.json();
  const { user_id, data } = c.var;

  // Update the role of the member if the current user is an admin
  const teamMember = await data.members.update(member_id, user_id, isAdmin);

  // Return not found status if the member is not found
  if (!teamMember) return c.notFound();

  // Return no content status
  return c.body(null, 204);
});

// Leave a team
router.delete("/leave", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, data } = c.var;

  const member = await data.members.findFirst(team_id, user_id);

  if (!member) return c.notFound();

  // Mark the the team member as deleted if the current user is a member
  await data.members.delete(member.id);

  // Return no content status
  return c.body(null, 204);
});

// Delete a team member
router.delete("/:member_id", isAdminOfTeam, async (c) => {
  const { member_id } = c.req.param();
  const { data } = c.var;

  // Mark the team member as deleted if the current user is an admin
  await data.members.delete(member_id);

  // Return no content status
  return c.body(null, 204);
});

// Get all invitations for a team
router.get("/invitations", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { data } = c.var;

  const team = await data.teams.findFirst(team_id);

  // Find all invitations for the team that are not deleted
  const invitations = await data.invitations.findMany(team_id);

  const response = invitations.map(async (invitation) => {
    const invited_by_member = await data.members.findById(invitation.invited_by_member_id);
    const invited_by_user = await data.users.findFirst(invited_by_member!.user_id);

    return {
      id: invitation.id,
      email: invitation.email,
      is_admin: invitation.is_admin,
      state: invitation.state,
      created_at: invitation.created_at,
      updated_at: invitation.updated_at,
      team_name: team?.name,
      invited_by_member_name: invited_by_user?.name,
    };
  });

  return c.json(response);
});

// Invite a user to a team
router.post("/invitations", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { email, isAdmin } = await c.req.json();
  const { user_id, data } = c.var;

  // Find the member that is creating the invitation
  const member = await data.members.findFirst(team_id, user_id);

  // return not found status if the member is not found
  if (!member) return c.notFound();

  // Create an invitation for the team
  const invitation = await data.invitations.create(team_id, member.id, email, isAdmin);

  // TODO: Send an email to the invited user

  // Return the invitation
  return c.json(invitation);
});

// Get a specific invitation for a team
router.get("/invitations/:invitation_id", async (c) => {
  const { team_id, invitation_id } = c.req.param();
  const { user_id, data } = c.var;

  const team = await data.teams.findFirst(team_id);

  const member = await data.members.findFirst(team_id, user_id);

  if (!member) return c.text("User is already a member of the team", 400);

  // Find the invitation for the team that is not deleted
  const invitation = await data.invitations.findFirst(team_id, invitation_id);

  if (!invitation) return c.notFound();

  const invited_by_member = await data.members.findById(invitation.invited_by_member_id);
  const invited_by_user = await data.users.findFirst(invited_by_member!.user_id);

  const reaponse = {
    id: invitation.id,
    email: invitation.email,
    is_admin: invitation.is_admin,
    state: invitation.state,
    created_at: invitation.created_at,
    updated_at: invitation.updated_at,
    team_name: team?.name,
    invited_by_member_name: invited_by_user?.name,
  };

  // Return the invitation
  return c.json(reaponse);
});

// Update a specific invitation for a team
router.put("/invitations/:invitation_id", isAdminOfTeam, async (c) => {
  const { invitation_id } = c.req.param();
  const { isAdmin } = await c.req.json();
  const { data } = c.var;

  // Update the invitation if the current user is an admin
  const invitation = await data.invitations.update(invitation_id, isAdmin);

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Return no content status
  return c.body(null, 204);
});

// Delete a specific invitation for a team
router.delete("/invitations/:invitation_id", isAdminOfTeam, async (c) => {
  const { invitation_id } = c.req.param();
  const { data } = c.var;

  // Mark the invitation as deleted if the current user is an admin
  await data.invitations.delete(invitation_id);

  // Return no content status
  return c.body(null, 204);
});

// Accept an invitation
router.put("/invitations/:invitation_id/accept", async (c) => {
  const { team_id, invitation_id } = c.req.param();
  const { user_id, data } = c.var;

  // Find the invitation that is pending and not deleted
  const invitation = await data.invitations.findFirstPending(team_id, invitation_id);

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Find if the user is already a member of the team
  const existingMember = await data.members.findFirst(team_id, user_id);

  // Return bad request status if the user is already a member of the team
  if (existingMember)
    return c.json({ message: "User is already a member of the team" }, 400);

  // Create a team member for the user
  const teamMember = await data.members.create(team_id, user_id, invitation.is_admin);

  // Update the invitation to accepted
  await data.invitations.accept(invitation.id);

  // Return the team member
  return c.json({ teamMember }, 201);
});

// Decline an invitation
router.put("/invitations/:invitation_id/decline", async (c) => {
  const {team_id, invitation_id } = c.req.param();
  const { data } = c.var;

  // Find the invitation that is pending and not deleted
  const invitation = await data.invitations.findFirstPending(team_id, invitation_id);

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Update the invitation to declined
  await data.invitations.decline(invitation.id);

  // Return no content status
  return c.body(null, 204);
});

export default router;
