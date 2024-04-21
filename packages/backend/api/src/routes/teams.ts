import express from "express";
import { isAdminOfTeam, isAuthorized, isMemberOfTeam } from "../services/middleware";
import { getTeamsForAuthenticatedUser, getTeamBySlug, createTeam, updateTeam } from "../services/teams";

const router = express.Router();
router.use(isAuthorized);

// Any authenticated user can access this route
router.get("", getTeamsForAuthenticatedUser);

// Only members of the team can access this routes
router.get(":slug", isMemberOfTeam, getTeamBySlug);

// Any authenticated user can access this route
router.post("", createTeam);

// Only admins of the team can access this route
router.put(":slug", isAdminOfTeam, updateTeam);

export default router;

