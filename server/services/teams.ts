import factory from "../factory";
import { db } from "../../prisma/db.injector";
import isMemberOfTeam from "../middleware/isMemberOfTeam";
import isAdminOfTeam from "../middleware/isAdminOfTeam";

export const getTeamsHandler = factory.createHandlers(async (c) => {
  const { user_id } = c.var;

  // Find all teams where the user is a member, that are not deleted
  const teams = await db.teams
    .findMany({
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
      include: {
        members: true,
      },
    })
    .finally(() => db.$disconnect());

  // Map the teams to the response
  const response = teams.map((team) => {
    const is_admin = !!team.members.find(
      (member) => member.user_id === user_id && member.is_admin
    );
    return {
      id: team.id,
      name: team.name,
      created_at: team.created_at,
      member_count: team.members.length,
      is_admin,
    };
  });

  return c.json(response);
});

export const createTeamHandler = factory.createHandlers(async (c) => {
  const { user_id } = c.var;
  const { name } = await c.req.json();

  // Create a new team and add the current user as an admin
  const team = await db.teams
    .create({
      data: {
        name,
        members: {
          create: {
            user_id,
            is_admin: true,
          },
        },
      },
    })
    .finally(() => db.$disconnect());

  return c.json(team, 201);
});

export const getTeamHandler = factory.createHandlers(isMemberOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { user_id } = c.var;

  // Find a specific team where the user is a member
  const team = await db.teams
    .findUnique({
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
      include: {
        members: true,
      },
    })
    .finally(() => db.$disconnect());

  if (!team) return c.notFound();

  // Map the team to the response
  const response = {
    id: team.id,
    name: team.name,
    created_at: team.created_at,
    member_count: team.members.length,
    is_admin: !!team.members.find(
      (member) => member.user_id === user_id && member.is_admin
    ),
  };

  return c.json(response);
});

export const updateTeamHandler = factory.createHandlers(isAdminOfTeam, async (c) => {
  const { team_id } = c.req.param();
  const { name } = await c.req.json();

  // Update the team's name if the team is not deleted
  const team = await db.teams
    .update({
      where: {
        id: team_id,
        is_deleted: {
          not: true,
        },
      },
      data: {
        name,
      },
    })
    .finally(() => db.$disconnect());

  // If the team is not found, return a 404
  if (!team) return c.notFound();

  //Return no content status
  return c.body(null, 204);
});

export const deleteTeamHandler = factory.createHandlers(isAdminOfTeam, async (c) => {
    const { team_id } = c.req.param();

    // Delete the team if it is not already deleted
    const team = await db.teams
      .update({
        where: {
          id: team_id,
        },
        data: {
          is_deleted: true,
        },
      })
      .finally(() => db.$disconnect());

    // If the team is not found, return a 404
    if (!team) return c.notFound();

    // Return no content status
    return c.body(null, 204);
});