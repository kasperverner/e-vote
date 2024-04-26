import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import NodeCache from "node-cache";

import db from "../utilities/db.server";

// Create a new NodeCache instance to store the user ID in memory for faster access
// The user ID will be stored in the memory cache for 24 hours
// The cache will be checked every hour to remove expired entries
const cache = new NodeCache({
  stdTTL: 60 * 60 * 24,
  checkperiod: 60 * 60,
});

/**
 * Middleware to check if the user is authorized
 */
export const isAuthorized: RequestHandler = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1] as string;

    // Verify the authentication token using jsonwebtoken
    const payload = jwt.verify(token, process.env.JWT_PUBLIC_KEY as string, {
      algorithms: ["RS256"],
      issuer: process.env.JWT_ISSUER,
      ignoreExpiration: true,
    }) as JwtPayload;

    // Get the user ID from the memory cache or the database
    const user_id = await getUserId(
      payload.sub as string,
      (payload.name ?? payload.email.split("@")[0]) as string,
      payload.email as string
    );

    // Add the user ID to the locals object to be used in the next RequestHandler
    res.locals.user_id = user_id;

    // Continue to the next RequestHandler
    return next();
  } catch (error) {
    console.error("error", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

/**
 * Function to get the user ID from memory cache or the database
 * If the user ID is not found in the memory cache or the database,
 * it will be created and stored in the memory cache
 * @param principal_id: The principal of the user
 * @param name: The name of the user
 * @param email: The email of the user
 */
const getUserId = async (principal_id: string, name: string, email: string) : Promise<string> => {
  // Check if the user ID is stored in the memory cache
  const user_id = cache.get(principal_id) as string;

  // If the user ID is found in the memory cache, return it
  if (user_id) return user_id;

  // Check if the user ID is stored in the database
  const user = await db.users.findFirst({
    where: {
      principal_id,
    },
  });

  // If the user is found in the database, store the ID in the memory cache
  if (user) {
    cache.set(principal_id, user.id);
    return user.id;
  }

  // Create a new user in the database
  const new_user = await db.users.create({
    data: {
      principal_id,
      name,
      email,
    },
  });

  // Store the new user ID in the memory cache
  cache.set(principal_id, new_user.id);

  // Return the user ID
  return new_user.id;
};

/**
 * Middleware to check if the user is a member of the team
 */
export const isMemberOfTeam: RequestHandler = async (req, res, next) => {
  try {
    const { team_id } = req.params;
    const { user_id } = res.locals;

    // Check if the user is a member of the team
    const team = await db.teams.findFirstOrThrow({
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
    console.error("error", error);
    return res.status(403).json({ message: "Forbidden" });
  }
};

/**
 * Middleware to check if the user is an admin of the team
 */
export const isAdminOfTeam: RequestHandler = async (req, res, next) => {
  try {
    const { team_id } = req.params;
    const { user_id } = res.locals;

    // Check if the user is an admin of the team
    const team = await db.teams.findFirstOrThrow({
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
    console.error("error", error);
    return res.status(403).json({ message: "Forbidden" });
  }
};

/**
 * Middleware to check if the user is eligible to vote
 */
export const isEligibleToVote: RequestHandler = async (req, res, next) => {
  try {
    const { election_id } = req.params;
    const { user_id } = res.locals;

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
    console.error("error", error);
    return res.status(403).json({ message: "Forbidden" });
  }
};

/**
 * Middleware to check if the user is eligible to edit the election
 */
export const isEligibleToEditElection: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { election_id } = req.params;
    const { user_id } = res.locals;

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
    console.error("error", error);
    return res.status(403).json({ message: "Forbidden" });
  }
};
