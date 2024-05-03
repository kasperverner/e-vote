import express from "express";
import {
  isAdminOfTeam,
  isAuthorized,
  isMemberOfTeam,
} from "../services/middleware";
import {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../services/teams";

const router = express.Router();
router.use(isAuthorized);

/**
 * GET /teams
 * get all teams that the authenticated user is a member of
 */
router.get("/", getTeams);

/**
 * GET /teams/:team_id
 * get team by id if the user is a member of the team
 */
router.get("/:team_id", isMemberOfTeam, getTeam);

/**
 * POST /teams
 * create a new team
 */
router.post("/", createTeam);

/**
 * PUT /teams/:team_id
 * update team if the user is an admin of the team
 */
router.put("/:team_id", isAdminOfTeam, updateTeam);

/**
 * DELETE /teams/:team_id
 * delete team if the user is an admin of the team
 */

router.delete("/:team_id", isAdminOfTeam, deleteTeam);

export default router;
