import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import db from "../utilities/db.server";

export const isAuthorized: RequestHandler = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1] as string;

    // Verify the authentication token using jsonwebtoken
    const payload = jwt.verify(token, process.env.JWT_PUBLIC_KEY as string, {
      algorithms: ["RS256"],
      issuer: process.env.JWT_ISSUER,
    }) as JwtPayload;

    // Add the user_id, name, and email to the request parameters
    req.params = {
      ...req.params,
      user_id: payload.sub as string,
      name: payload.name as string,
      email: payload.email as string,
    };

    // Continue to the next RequestHandler
    return next();
  } catch (error) {
    console.error("error", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isMemberOfTeam: RequestHandler = async (req, res, next) => {
  try {
    const { user_id, team_id } = req.params;

    // Check if the user is a member of the team
    const team = await db.teams.findUniqueOrThrow({
      where: {
        id: team_id,
        members: {
          some: {
            user_id,
          },
        },
      },
    });

    // Continue to the next RequestHandler
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export const isAdminOfTeam: RequestHandler = async (req, res, next) => {
  try {
    const { user_id, team_id } = req.params;

    // Check if the user is an admin of the team
    const team = await db.teams.findUniqueOrThrow({
      where: {
        id: team_id,
        members: {
          some: {
            user_id,
            is_admin: true,
          },
        },
      },
    });

    // Continue to the next RequestHandler
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export const isEligibleToVote: RequestHandler = async (req, res, next) => {
  try {
    const { user_id, election_id } = req.params;

    // Check if the user has already voted
    const ballot = await db.ballots.findFirst({
      where: {
        user_id,
        is_used: true,
        election_id,
      },
    });

    // If the user has already voted, return a 403 Forbidden response
    if (ballot)
      return res.status(403).json({ message: "User has already voted" });

    // Continue to the next RequestHandler
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export const isEligibleToEditElection: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { user_id, election_id } = req.params;

    // Check if the user is an admin of the team that the election belongs to
    // and if the election has not started yet
    var election = await db.elections.findFirstOrThrow({
      where: {
        id: election_id,
        team: {
          members: {
            some: {
              user_id,
              is_admin: true,
            },
          },
        },
        start_at: {
          gt: new Date(),
        },
      },
    });

    // Continue to the next RequestHandler
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};
