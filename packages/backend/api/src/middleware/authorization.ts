import { RequestHandler } from "express";

export const authorization: RequestHandler = async (req, res, next) => {
  try {
    console.log('authorization middleware');

    // if user is not authenticated return 401
    // else return next()

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};