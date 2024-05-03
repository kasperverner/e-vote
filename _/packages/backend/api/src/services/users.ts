import { RequestHandler } from "express";
import db from "../utilities/db.server";

/**
 * Get the authenticated user
 * @param user_id: string
 * @param name: string
 * @param email: string
 * @returns user: User
 */
export const getAuthenticatedUser: RequestHandler = async (req, res) => {
  const { name, email } = req.params;
  const { user_id } = res.locals;

  // Check if user exists in the database
  let user = await db.users.findUnique({
    where: {
      id: user_id,
    },
  });

  return res.status(200).json({ user });
};
