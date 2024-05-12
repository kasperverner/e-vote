import factory from "../factory";
import { db } from "@/prisma/db.injector";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";

export const getMembersHandler = factory.createHandlers(
  isMemberOfTeam,
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Find all members of the team that are not deleted if the current user is a member
    const members = await db.teamMembers
      .findMany({
        where: {
          team_id,
          is_deleted: {
            not: true,
          },
        },
        include: {
          user: true,
        },
      })
      .finally(() => db.$disconnect());

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
  isAdminOfTeam,
  async (c) => {
    const { member_id } = c.req.param();
    const { isAdmin } = await c.req.json();
    const { user_id } = c.var;

    // Update the role of the member if the current user is an admin
    // and the member is not the current user
    const teamMember = await db.teamMembers
      .update({
        where: {
          id: member_id,
          user_id: {
            not: user_id,
          },
          is_deleted: {
            not: true,
          },
        },
        data: {
          is_admin: isAdmin,
        },
      })
      .finally(() => db.$disconnect());

    // Return not found status if the member is not found
    if (!teamMember) return c.notFound();

    // Return no content status
    return c.body(null, 204);
  }
);

export const deleteMemberHandler = factory.createHandlers(
  isAdminOfTeam,
  async (c) => {
    const { member_id } = c.req.param();
    const { user_id } = c.var;

    // Mark the the team member as deleted if the current user is an admin
    // and the member is not the current user
    await db.teamMembers
      .updateMany({
        where: {
          id: member_id,
          user_id: {
            not: user_id,
          },
          is_deleted: {
            not: true,
          },
        },
        data: {
          is_deleted: true,
        },
      })
      .finally(() => db.$disconnect());

    // Return no content status
    return c.body(null, 204);
  }
);

export const leaveTeamHandler = factory.createHandlers(
  isMemberOfTeam,
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Mark the the team member as deleted if the current user is a member
    await db.teamMembers
      .updateMany({
        where: {
          team_id,
          user_id,
          is_deleted: {
            not: true,
          },
        },
        data: {
          is_deleted: true,
        },
      })
      .finally(() => db.$disconnect());

    // Return no content status
    return c.body(null, 204);
  }
);

// Invitations
export const getInvitationsHandler = factory.createHandlers(
  isAdminOfTeam,
  async (c) => {
    const { team_id } = c.req.param();

    // Find all invitations for the team that are not deleted
    const invitations = await db.invitations
      .findMany({
        where: {
          team_id,
          is_deleted: {
            not: true,
          },
        },
        include: {
          team: true,
          invited_by_member: {
            include: {
              user: true,
            },
          },
        },
      })
      .finally(() => db.$disconnect());

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
  isAdminOfTeam,
  async (c) => {
    const { team_id } = c.req.param();
    const { email, is_admin } = await c.req.json();
    const { user_id } = c.var;

    // Find the member that is creating the invitation
    const member = await db.teamMembers
      .findFirst({
        where: {
          team_id,
          user_id,
          is_deleted: {
            not: true,
          },
        },
      })
      .finally(() => db.$disconnect());

    // return not found status if the member is not found
    if (!member) return c.notFound();

    // Create an invitation for the team
    const invitation = await db.invitations
      .create({
        data: {
          team_id: team_id,
          invited_by_member_id: member.id,
          email,
          is_admin: is_admin,
        },
      })
      .finally(() => db.$disconnect());

    // TODO: Send an email to the invited user

    // Return the invitation
    return c.json(invitation);
  }
);

export const getInvitationHandler = factory.createHandlers(
  isAdminOfTeam,
  async (c) => {
    const { team_id, invitation_id } = c.req.param();
    const { user_id } = c.var;

    // Find the invitation for the team that is not deleted
    const invitation = await db.invitations
      .findFirst({
        where: {
          team_id,
          team: {
            id: team_id,
            members: {
              none: {
                user_id,
                is_deleted: {
                  not: true,
                },
              },
            },
          },
          id: invitation_id,
          is_deleted: {
            not: true,
          },
        },
        include: {
          team: true,
          invited_by_member: {
            include: {
              user: true,
            },
          },
        },
      })
      .finally(() => db.$disconnect());

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
  isAdminOfTeam,
  async (c) => {
    const { invitation_id } = c.req.param();
    const { is_admin } = await c.req.json();

    // Update the invitation if the current user is an admin
    const invitation = await db.invitations
      .update({
        where: {
          id: invitation_id,
          state: "PENDING",
          is_deleted: {
            not: true,
          },
        },
        data: {
          is_admin: is_admin,
        },
      })
      .finally(() => db.$disconnect());

    // Return not found status if the invitation is not found
    if (!invitation) return c.notFound();

    // Return no content status
    return c.body(null, 204);
  }
);

export const deleteInvitationHandler = factory.createHandlers(
  isAdminOfTeam,
  async (c) => {
    const { invitation_id } = c.req.param();

    // Mark the invitation as deleted if the current user is an admin
    const invitation = await db.invitations
      .update({
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
      })
      .finally(() => db.$disconnect());

    // Return not found status if the invitation is not found
    if (!invitation) return c.notFound();

    // Return no content status
    return c.body(null, 204);
  }
);

// Accept/Decline Invitations
export const acceptInvitationHandler = factory.createHandlers(async (c) => {
  const { invitation_id } = c.req.param();
  const { user_id } = c.var;

  // Find the invitation that is pending and not deleted
  const invitation = await db.invitations
    .findUnique({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
    })
    .finally(() => db.$disconnect());

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Find if the user is already a member of the team
  const existingMember = await db.teamMembers
    .findFirst({
      where: {
        team_id: invitation.team_id,
        user_id,
        is_deleted: {
          not: true,
        },
      },
    })
    .finally(() => db.$disconnect());

  // Return bad request status if the user is already a member of the team
  if (existingMember)
    return c.json({ message: "User is already a member of the team" }, 400);

  // Create a team member for the user
  const teamMember = await db.teamMembers
    .create({
      data: {
        team_id: invitation.team_id,
        user_id: user_id,
        is_admin: invitation.is_admin,
      },
    })
    .finally(() => db.$disconnect());

  // Update the invitation to accepted
  await db.invitations
    .update({
      where: {
        id: invitation.id,
      },
      data: {
        state: "ACCEPTED",
      },
    })
    .finally(() => db.$disconnect());

  // Return the team member
  return c.json(teamMember, 201);
});

export const declineInvitationHandler = factory.createHandlers(async (c) => {
  const { invitation_id } = c.req.param();

  // Find the invitation that is pending and not deleted
  const invitation = await db.invitations
    .findUnique({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
    })
    .finally(() => db.$disconnect());

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Update the invitation to declined
  await db.invitations
    .update({
      where: {
        id: invitation.id,
      },
      data: {
        state: "DECLINED",
      },
    })
    .finally(() => db.$disconnect());

  // Return no content status
  return c.body(null, 204);
});

