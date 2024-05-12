import factory from "../factory";
import type { Member } from "./members.test";

export type Team = {
  id: string;
  name: string;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
  members: Member[];
};

const db = new Set<Team>();

export const getTeamsHandler = factory.createHandlers(async (c) => {
  const { user_id } = c.var;

  // Find all teams where the user is a member
  const teams = Array.from(db).filter((team) => !!team.members.find(member => member.user_id === user_id && !member.is_deleted) && !team.is_deleted);

  // Map the teams to the response
  const response = teams.map((team) => {
    return {
      id: team.id,
      name: team.name,
      created_at: team.created_at,
      member_count: team.members.length,
      is_admin: !!team.members.find(
        (member) => member.user_id === user_id && member.is_admin
      ),
    };
  });

  return c.json(response);
});

export const createTeamHandler = factory.createHandlers(async (c) => {
  const { user_id } = c.var;
  const { name } = await c.req.json();

  // Create a new team and add the current user as an admin
  const team = {
    id: `team-${db.size + 1}`,
    name,
    is_deleted: false,
    created_at: new Date(),
    updated_at: null,
    members: [
      {
        id: `member-${db.size + 1}`,
        team_id: `team-${db.size + 1}`,
        user_id,
        is_admin: true,
        is_deleted: false,
        created_at: new Date(),
        updated_at: null,
      },
    ],
  };

  return c.json(team, 201);
});

export const getTeamHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Find a specific team where the user is a member
    const team = Array.from(db).find(
      (team) => team.id === team_id && !!team.members.find(member => member.user_id === user_id && !member.is_deleted) && !team.is_deleted
    );

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
  }
);

export const updateTeamHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;
    const { name } = await c.req.json();

    // Update the team's name if the team is not deleted and the user is an admin
    const team = Array.from(db).find(
      (team) =>
        team.id === team_id &&
        !!team.members.find(
          (member) => member.user_id === user_id && !member.is_deleted && member.is_admin
        ) &&
        !team.is_deleted
    );

    // If the team is not found, return a 404
    if (!team) return c.notFound();

    team.name = name;

    //Return no content status
    return c.body(null, 204);
  }
);

export const deleteTeamHandler = factory.createHandlers(
  async (c) => {
    const { team_id } = c.req.param();
    const { user_id } = c.var;

    // Delete the team if it is not already deleted and the user is an admin
    const team = Array.from(db).find(
      (team) =>
        team.id === team_id &&
        !!team.members.find(
          (member) =>
            member.user_id === user_id &&
            !member.is_deleted &&
            member.is_admin
        ) &&
        !team.is_deleted
    );

    // If the team is not found, return a 404
    if (!team) return c.notFound();

    team.is_deleted = true;

    // Return no content status
    return c.body(null, 204);
  }
);
