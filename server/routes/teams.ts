import type { Environment } from "@/server/environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";

const router = new Hono<Environment>()
  // Get all teams
  .get("/", async (c) => {
    const { user_id, db } = c.var;
    const teams = await db.teams.findMany({
      where: {
        members: {
          some: {
            user_id,
          },
        },
        is_deleted: {
          not: true,
        },
      },
      select: {
        id: true,
        name: true,
        created_at: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    return c.json(teams);
  })
  // Create a new team
  .post("/", async (c) => {
    const { user_id, db } = c.var;
    const { name } = await c.req.json();

    const team = await db.teams.create({
      data: {
        name,
        members: {
          create: {
            user_id,
            is_admin: true,
          },
        },
      },
    });

    return c.json(team, 201);
  })
  // Get a team
  .get("/:team_id", isMemberOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { user_id, db } = c.var;

    const team = await db.teams.findUnique({
      where: {
        id: team_id,
        is_deleted: {
          not: true,
        },
      },
      select: {
        id: true,
        name: true,
        created_at: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    });

    if (!team) return c.notFound();

    const isAdmin = await db.teamMembers.findFirst({
      where: {
        team_id,
        user_id,
        is_admin: true,
      },
    });

    return c.json({ ...team, isAdmin: !!isAdmin });
  })
  // Update a team
  .put("/:team_id", isAdminOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { name } = await c.req.json();
    const { db } = c.var;

    const team = await db.teams.update({
      where: {
        id: team_id,
        is_deleted: {
          not: true,
        },
      },
      data: {
        name,
      },
    });

    return c.status(204);
  })
  // Delete a team
  .delete("/:team_id", isAdminOfTeam, async (c) => {
    const { team_id } = c.req.param();
    const { db } = c.var;

    await db.teams.update({
      where: {
        id: team_id,
      },
      data: {
        is_deleted: true,
      },
    });

    return c.status(204);
  });

export default router;