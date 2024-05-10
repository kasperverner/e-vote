import type { Environment } from "../environment";
import { Hono } from "hono";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";

/**
 * The router for the teams endpoints.
 * @param {Environment} c The Hono context with the db and user_id
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = new Hono<Environment>();

// Get all teams
router.get("/", async (c) => {
  const { user_id, data } = c.var;

  // Find all teams where the user is a member, that are not deleted
  const teams = await data.teams.findMany();
  const response = teams.map(async (team) => {
    const members = await data.members.findMany(team.id);

    // Check if the user is a member of the team
    if (!members.find((member) => member.user_id === user_id && member.is_deleted))
      return null;

    // Check if the user is an admin of the team
    const isAdmin = members.find((member) => member.user_id === user_id && member.is_admin);
    return {
      id: team.id,
      name: team.name,
      created_at: team.created_at,
      member_count: members.length,
      is_admin: !!isAdmin,
    };
  }).filter((team) => team !== null);

  // Return the list of teams
  return c.json(response);
});

// Create a new team
router.post("/", async (c) => {
  const { user_id, data } = c.var;
  const { name } = await c.req.json();

  // Create a new team and add the creator as an admin
  const team = await data.teams.create(name);
  await data.members.create(team.id, user_id, true);

  // Return the new team
  return c.json(team, 201);
});

// Get a team
router.get("/:team_id", isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id, data } = c.var;

  // Find a specific team where the user is a member
  const team = await data.teams.findFirst(team_id);

  if (!team) return c.notFound();

  const members = await data.members.findMany(team.id);

  const is_admin = members.find((member) => member.user_id === user_id && member.is_admin && !member.is_deleted);

  const response = {
    id: team.id,
    name: team.name,
    created_at: team.created_at,
    member_count: members.length,
    is_admin: !!is_admin,
  };

  // Return the team with the isAdmin flag
  return c.json(response);
});

// Update a team
router.put("/:team_id", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { name } = await c.req.json();
  const { data } = c.var;

  // Update the team's name if the team is not deleted
  await data.teams.update(team_id, name);

  //Return no content status
  return c.body(null, 204);
})

// Delete a team
router.delete("/:team_id", isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { data } = c.var;

  // Delete the team if it is not already deleted
  await data.teams.delete(team_id);

  // Return no content status
  return c.body(null, 204);
});

export default router;