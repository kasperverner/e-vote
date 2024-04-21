import express from "express";
import { isAdminOfTeam, isAuthorized, isMemberOfTeam } from "../services/middleware";
import { getTeamsForAuthenticatedUser, getTeamBySlug, createTeam, updateTeam } from "../services/teams";

const router = express.Router();
router.use(isAuthorized);

// Any authenticated user can access this route
router.get("/", getTeamsForAuthenticatedUser);

// Only members of the team can access this routes
router.get("/:team_id", isMemberOfTeam, getTeamBySlug);

// Any authenticated user can access this route
router.post("/", createTeam);

// Only admins of the team can access this route
router.put("/:team_id", isAdminOfTeam, updateTeam);

export default router;

