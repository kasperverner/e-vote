import { RequestHandler } from "express";
import db from "../utilities/db.server";

/**
 * Get all teams that the authenticated user is a member of
 * @param user_id: string
 * @returns teams: Team[]
 */
export const getTeams: RequestHandler = async (req, res) => {
  const { user_id } = res.locals;

  try {
    // Find all teams that the authenticated user is a member of
    const teams = await db.teams.findMany({
      where: {
        members: {
          some: {
            user_id,
          },
        },
        is_deleted: {
          not: true,
        }
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

    return res.status(200).json(teams);
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Get team by id
 * @param team_id: string
 * @returns team: Team
 */
export const getTeam: RequestHandler = async (req, res) => {
  const { team_id } = req.params;
  const { user_id } = res.locals;

  try {
    // Find the team by the slug
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

    if (!team) return res.status(404).send(`Team with ID ${team_id} not found`);

    const isAdmin = await db.teamMembers.findFirst({
      where: {
        team_id,
        user_id,
        is_admin: true,
      },
    });

    return res.status(200).json({ ...team, isAdmin: !!isAdmin });
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Create a new team
 * @param user_id: string
 * @param name: string
 * @returns team: Team
 */
export const createTeam: RequestHandler = async (req, res) => {
  const { user_id } = res.locals;
  const { name } = req.body;
  try {
    // Create a new team and add the authenticated user as an admin
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

    return res.status(201).json(team);
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Update team by id
 * @param team_id: string
 * @param name: string
 * @returns team: Team
 */
export const updateTeam: RequestHandler = async (req, res) => {
  const { team_id } = req.params;
  const { name } = req.body;

  try {
    // Update the team with the new name
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

    return res.status(204).send();
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Delete team by id
 * @param team_id: string
 */
export const deleteTeam: RequestHandler = async (req, res) => {
  const { team_id } = req.params;

  try {
    // Delete the team
    await db.teams.update({
      where: {
        id: team_id,
        is_deleted: {
          not: true,
        },
      },
      data: {
        is_deleted: true,
      }
    });

    return res.status(204).send();
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
