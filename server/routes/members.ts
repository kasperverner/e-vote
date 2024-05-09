import type { Environment } from "../environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";
import injectDb from "../../prisma/db.injector";
import isAuthorized from "../middleware/isAuthorized";

/**
 * The router for the members endpoints.
 * injectDb middleware is used to inject the db into the context
 * isAuthorized middleware is used to check if the user is authenticated and inject the user_id into the context
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = new Hono<Environment>()
  .use(injectDb, isAuthorized)
  .basePath("/:team_id/members");

  // Get all members of a team
router.get("/", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, db } = c.var;

  // Find all members of the team that are not deleted if the current user is a member
  const members = await db.teamMembers.findMany({
    where: {
      team_id,
      is_deleted: {
        not: true,
      },
    },
    select: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      id: true,
      is_admin: true,
      created_at: true,
    },
  });

  // Return the list of members
  return c.json(
    members?.map((member) => ({
      name: member.user.name,
      email: member.user.email,
      isAdmin: member.is_admin,
      isUser: member.user.id === user_id,
      createdAt: member.created_at,
      id: member.id,
    }))
  );
});

// Update the role of a member
router.put("/:member_id", isAdminOfTeam, async (c) => {
  const { member_id } = c.req.param();
  const { isAdmin } = await c.req.json();
  const { user_id, db } = c.var;

  // Update the role of the member if the current user is an admin
  const teamMember = await db.teamMembers.update({
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
  });

  // Return not found status if the member is not found
  if (!teamMember) return c.notFound();

  // Return no content status
  return c.body(null, 204);
});

// Leave a team
router.delete("/leave", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, db } = c.var;

  // Mark the the team member as deleted if the current user is a member
  await db.teamMembers.updateMany({
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
  });

  // Return no content status
  return c.body(null, 204);
})

// Delete a team member
router.delete("/:member_id", isAdminOfTeam, async (c) => {
  const { member_id } = c.req.param();
  const { db } = c.var;


  await db.teamMembers.updateMany({
    where: {
      id: member_id,
      is_deleted: {
        not: true,
      },
    },
    data: {
      is_deleted: true,
    },
  });

  // Return no content status
  return c.body(null, 204);
})

// Get all invitations for a team
router.get("/invitations", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { db } = c.var;

  // Find all invitations for the team that are not deleted
  const invitations = await db.invitations.findMany({
    where: {
      team_id,
      is_deleted: {
        not: true,
      },
    },
    select: {
      id: true,
      email: true,
      is_admin: true,
      created_at: true,
      updated_at: true,
      state: true,
      team: {
        select: {
          name: true,
        },
      },
      invited_by_member: {
        select: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  // Return the list of invitations
  return c.json(invitations);
})

// Invite a user to a team
router.post("/invitations", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { email, isAdmin } = await c.req.json();
  const { user_id, db } = c.var;

  // Find the member that is creating the invitation
  const member = await db.teamMembers.findFirst({
    where: {
      team_id,
      user_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // return not found status if the member is not found
  if (!member) return c.notFound();

  // Create an invitation for the team
  const invitation = await db.invitations.create({
    data: {
      team_id: team_id,
      invited_by_member_id: member.id,
      email,
      is_admin: isAdmin,
    },
  });

  // TODO: Send an email to the invited user

  // Return the invitation
  return c.json(invitation);
})

// Get a specific invitation for a team
router.get("/invitations/:invitation_id", async (c) => {
  const { team_id, invitation_id } = c.req.param();
  const { user_id, db } = c.var;

  // Find the invitation for the team that is not deleted
  const invitation = await db.invitations.findFirst({
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
    select: {
      id: true,
      email: true,
      is_admin: true,
      created_at: true,
      updated_at: true,
      state: true,
      team: {
        select: {
          name: true,
        },
      },
      invited_by_member: {
        select: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Return the invitation
  return c.json(invitation);
})

// Update a specific invitation for a team
router.put("/invitations/:invitation_id", isAdminOfTeam, async (c) => {
  const { invitation_id } = c.req.param();
  const { isAdmin } = await c.req.json();
  const { db } = c.var;

  // Update the invitation if the current user is an admin
  const invitation = await db.invitations.update({
    where: {
      id: invitation_id,
      state: "PENDING",
      is_deleted: {
        not: true,
      },
    },
    data: {
      is_admin: isAdmin,
    },
  });

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Return no content status
  return c.body(null, 204);
})

// Delete a specific invitation for a team
router.delete("/invitations/:invitation_id", isAdminOfTeam, async (c) => {
  const { invitation_id } = c.req.param();
  const { db } = c.var;

  // Mark the invitation as deleted if the current user is an admin
  await db.invitations.update({
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

  // Return no content status
  return c.body(null, 204);
});

// Accept an invitation
router.put("/invitations/:invitation_id/accept", async (c) => {
  const { invitation_id } = c.req.param();
  const { user_id, db } = c.var;

  // Find the invitation that is pending and not deleted
  const invitation = await db.invitations.findUnique({
    where: {
      id: invitation_id,
      state: "PENDING",
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Find if the user is already a member of the team
  const existingMember = await db.teamMembers.findFirst({
    where: {
      team_id: invitation.team_id,
      user_id,
      is_deleted: {
        not: true,
      },
    },
  });

  // Return bad request status if the user is already a member of the team
  if (existingMember)
    return c.json({ message: "User is already a member of the team" }, 400);

  // Create a team member for the user
  const teamMember = await db.teamMembers.create({
    data: {
      team_id: invitation.team_id,
      user_id: user_id,
      is_admin: invitation.is_admin,
    },
  });

  // Update the invitation to accepted
  await db.invitations.update({
    where: {
      id: invitation.id,
    },
    data: {
      state: "ACCEPTED",
    },
  });

  // Return the team member
  return c.json({ teamMember }, 201);
});

// Decline an invitation
router.put("/invitations/:invitation_id/decline", async (c) => {
  const { invitation_id } = c.req.param();
  const { db } = c.var;

  // Find the invitation that is pending and not deleted
  const invitation = await db.invitations.findUnique({
    where: {
      id: invitation_id,
      state: "PENDING",
      is_deleted: {
        not: true,
      },
    },
  });

  // Return not found status if the invitation is not found
  if (!invitation) return c.notFound();

  // Update the invitation to declined
  await db.invitations.update({
    where: {
      id: invitation.id,
    },
    data: {
      state: "DECLINED",
    },
  });

  // Return no content status
  return c.body(null, 204);
});

export default router;
