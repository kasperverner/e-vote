import { RequestHandler } from "express";
import db from "../utilities/db.server";

export const getAuthenticatedUser: RequestHandler = async (req, res) => {
  const { user_id, name, email } = req.params;

  // Check if user exists in the database
  let user = await db.users.findUnique({
    where: {
      principal_id: user_id,
    },
  });

  // If user does not exist, create a new user in the database
  if (!user) {
    user = await db.users.create({
      data: {
        principal_id: user_id,
        name,
        email,
      },
    });
  }

  return res.status(200).json({ user });
};
