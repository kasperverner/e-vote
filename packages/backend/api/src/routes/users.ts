import express from "express";
import { isAuthorized } from "../services/middleware";
import { getAuthenticatedUser } from "../services/users";

const router = express.Router();


/**
 * GET /users
 * get the authenticated user
 */
router.get("/", isAuthorized, getAuthenticatedUser);

export default router;
