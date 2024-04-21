import express from "express";
import { isAuthorized } from "../services/middleware";
import { getAuthenticatedUser } from "../services/users";

const router = express.Router();

// Any authenticated user can access this route
router.get("", isAuthorized, getAuthenticatedUser);

export default router;

