import { RequestHandler } from "express";
import db from "../utilities/db.server";

export const getUserById: RequestHandler = async (req, res) => {
  console.log('getting user with id', req.params.id);

  // const user = await db.user.findUnique({
  //   where: {
  //     id: parseInt(req.params.id)
  //   }
  // });

  res.status(200).send();
}

export const createUser: RequestHandler = async (req, res) => {
  console.log("creating new user");

  res.status(201).send();
};

export const updateUser: RequestHandler = async (req, res) => {
  console.log("updating user with id", req.params.id);

  res.status(204).send();
}

export const deleteUser: RequestHandler = async (req, res) => {
  console.log("deleting user with id", req.params.id);

  res.status(204).send();
}