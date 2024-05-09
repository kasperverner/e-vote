import type { Environment } from "../environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";
import injectDb from "../../prisma/db.injector";
import isAuthorized from "../middleware/isAuthorized";

/**
 * The router for the teams endpoints.
 * injectDb middleware is used to inject the db into the context
 * isAuthorized middleware is used to check if the user is authenticated and inject the user_id into the context
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = new Hono<Environment>()
  .use(injectDb, isAuthorized);

  // Get all teams
router.get("/", async (c) => {
  const { user_id, db } = c.var;

  // Find all teams where the user is a member, that are not deleted
  const teams = await db.teams.findMany({
    where: {
      members: {
        some: {
          user_id,
          is_deleted: {
            not: true,
          },
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
      // Count the number of members in the team
      _count: {
        select: {
          members: true,
        },
      },
    },
  });

  // Return the list of teams
  return c.json(teams);
});

// Create a new team
router.post("/", async (c) => {
  const { user_id, db } = c.var;
  const { name } = await c.req.json();

  // Create a new team and add the creator as an admin
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

  // Return the new team
  return c.json(team, 201);
});

// Get a team
router.get("/:team_id", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, db } = c.var;

  // Find a specific team where the user is a member
  const team = await db.teams.findUnique({
    where: {
      id: team_id,
      is_deleted: {
        not: true,
      },
      members: {
        some: {
          user_id,
          is_deleted: {
            not: true,
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      created_at: true,
      // Count the number of members in the team
      _count: {
        select: {
          members: true,
        },
      },
    },
  });

  if (!team) return c.notFound();

  // Check if the user is an admin of the team
  const isAdmin = await db.teamMembers.findFirst({
    where: {
      team_id,
      user_id,
      is_admin: true,
    },
  });

  // Return the team with the isAdmin flag
  return c.json({ ...team, isAdmin: !!isAdmin });
});

// Update a team
router.put("/:team_id", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { name } = await c.req.json();
  const { db } = c.var;

  // Update the team's name if the team is not deleted
  await db.teams.update({
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

  //Return no content status
  return c.body(null, 204);
})

// Delete a team
router.delete("/:team_id", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { db } = c.var;

  // Delete the team if it is not already deleted
  await db.teams.update({
    where: {
      id: team_id,
    },
    data: {
      is_deleted: true,
    },
  });

  // Return no content status
  return c.body(null, 204);
});

export default router;