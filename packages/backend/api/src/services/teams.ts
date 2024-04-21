import { RequestHandler } from "express";
import db from "../utilities/db.server";

export const getTeamsForAuthenticatedUser: RequestHandler = async (
  req,
  res
) => {
  const { user_id } = req.params;

  try {

    // Find all teams that the authenticated user is a member of
    const teams = await db.teams.findMany({
      where: {
        members: {
          some: {
            user_id,
          },
        },
      },
    });

    return res.status(200).json(teams);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTeamBySlug: RequestHandler = async (req, res) => {
  const { team_id } = req.params;

  // Find the team by the slug
  const team = await db.teams.findUnique({
    where: {
      id: team_id,
    },
  });

  if (!team) return res.status(404).send(`Team with ID ${team_id} not found`);

  return res.status(200).json(team);
};

export const createTeam: RequestHandler = async (req, res) => {
  const { user_id } = req.params;
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
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTeam: RequestHandler = async (req, res) => {
  const { team_id } = req.params;

  try {
    // Update the team with the new name
    const team = await db.teams.update({
      where: {
        id: team_id
      },
      data: {
        name: req.body.name
      },
    });

    return res.status(200).json(team);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
