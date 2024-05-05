import type { Environment } from "../environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";
import injectDb from "../../prisma/db.injector";
import isAuthorized from "../middleware/isAuthorized";

const router = new Hono<Environment>()
  .use(injectDb, isAuthorized)
  .basePath("/:team_id/members")
  // Get all members of a team
  .get("/", isMemberOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { user_id, db } = c.var;

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
  })
  // Update the role of a member
  .put("/:member_id", isAdminOfTeam, async (c) => {
    const { member_id } = c.req.param();
    const { isAdmin } = await c.req.json();
    const { user_id, db } = c.var;

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

    if (!teamMember) return c.notFound();

    return c.body(null, 204);
  })
  // Leave a team
  .delete("/leave", isMemberOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { user_id, db } = c.var;

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

    return c.body(null, 204);
  })
  // Delete a team member
  .delete("/:member_id", isAdminOfTeam, async (c) => {
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

    return c.body(null, 204);
  })
  // Get all invitations for a team
  .get("/invitations", isAdminOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { db } = c.var;

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

    return c.json(invitations);
  })
  // Invite a user to a team
  .post("/invitations", isAdminOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { email, isAdmin } = await c.req.json();
    const { user_id, db } = c.var;

    const member = await db.teamMembers.findFirst({
      where: {
        team_id,
        user_id,
        is_deleted: {
          not: true,
        },
      },
    });

    if (!member) return c.notFound();

    const invitation = await db.invitations.create({
      data: {
        team_id: team_id,
        invited_by_member_id: member.id,
        email,
        is_admin: isAdmin,
      },
    });

    // TODO: Send an email to the invited user

    return c.json(invitation);
  })
  // Get a specific invitation for a team
  .get("/invitations/:invitation_id", async (c) => {
    const { team_id, invitation_id } = c.req.param();
    const { user_id, db } = c.var;

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

    if (!invitation) return c.notFound();

    return c.json(invitation);
  })
  // Update a specific invitation for a team
  .put("/invitations/:invitation_id", isAdminOfTeam, async (c) => {
    const { invitation_id } = c.req.param();
    const { isAdmin } = await c.req.json();
    const { db } = c.var;

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

    if (!invitation) return c.notFound();

    return c.body(null, 204);
  })
  // Delete a specific invitation for a team
  .delete("/invitations/:invitation_id", isAdminOfTeam, async (c) => {
    const { invitation_id } = c.req.param();
    const { db } = c.var;

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

    return c.body(null, 204);
  })
  // Accept an invitation
  .put("/invitations/:invitation_id/accept", async (c) => {
    const { invitation_id } = c.req.param();
    const { user_id, db } = c.var;

    const invitation = await db.invitations.findUnique({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
    });

    if (!invitation) return c.json({ message: "Invitation not found" }, 404);

    const existingMember = await db.teamMembers.findFirst({
      where: {
        team_id: invitation.team_id,
        user_id,
        is_deleted: {
          not: true,
        },
      },
    });

    if (existingMember)
      return c.json({ message: "User is already a member of the team" }, 404);

    const teamMember = await db.teamMembers.create({
      data: {
        team_id: invitation.team_id,
        user_id: user_id,
        is_admin: invitation.is_admin,
      },
    });

    await db.invitations.update({
      where: {
        id: invitation.id,
      },
      data: {
        state: "ACCEPTED",
      },
    });

    return c.json({ teamMember }, 201);
  })
  // Decline an invitation
  .put("/invitations/:invitation_id/decline", async (c) => {
    const { invitation_id } = c.req.param();
    const { db } = c.var;

    const invitation = await db.invitations.findUnique({
      where: {
        id: invitation_id,
        state: "PENDING",
        is_deleted: {
          not: true,
        },
      },
    });

    if (!invitation) return c.json({ message: "Invitation not found" }, 404);

    await db.invitations.update({
      where: {
        id: invitation.id,
      },
      data: {
        state: "DECLINED",
      },
    });

    return c.body(null, 204);
  });

export default router;
