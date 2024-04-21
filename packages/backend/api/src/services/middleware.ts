import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import db from "../utilities/db.server";

export const isAuthorized: RequestHandler = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1] as string;

    // Verify the authentication token
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

    return next();
  } catch (error) {
    console.error("error", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const isMemberOfTeam: RequestHandler = async (req, res, next) => {
  try {
    const { user_id, slug } = req.params;

    // Check if the user is a member of the team
    const team = await db.teams.findUniqueOrThrow({
      where: {
        slug,
        members: {
          some: {
            user_id,
          },
        },
      },
    });

    req.params = {
      ...req.params,
      team_id: team.id,
    };

    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export const isAdminOfTeam: RequestHandler = async (req, res, next) => {
  try {
    const { user_id, slug } = req.params;

    // Check if the user is an admin of the team
    const team = await db.teams.findUniqueOrThrow({
      where: {
        slug,
        members: {
          some: {
            user_id,
            is_admin: true,
          },
        },
      },
    });

    req.params = {
      ...req.params,
      team_id: team.id,
    };

    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export const isEligibleToVote: RequestHandler = async (req, res, next) => {
  try {
    const { user_id, slug } = req.params;

    // Check if the user has already voted
    const hasVotes = await db.elections.findUnique({
      where: {
        slug,
        ballots: {
          some: {
            user_id,
            is_used: true,
          },
        },
      },
    });

    // If the user has already voted, return a 403 Forbidden response
    if (hasVotes)
      return res.status(403).json({ message: "User has already voted" });

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
    const { user_id, slug } = req.params;

    // Check if the user is an admin of the team that the election belongs to
    // and if the election has not started yet
    await db.elections.findFirstOrThrow({
      where: {
        slug,
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

    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};
