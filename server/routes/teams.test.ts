import factory from "../factory";
import { getTeamsHandler, createTeamHandler, getTeamHandler, updateTeamHandler, deleteTeamHandler } from "../services/teams.test";

/**
 * The router for the teams endpoints.
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = factory.createApp();

// Get all teams
router.get("/", ...getTeamsHandler);

// Create a new team
router.post("/", ...createTeamHandler);

// Get a team
router.get("/:team_id", ...getTeamHandler);

// Update a team
router.put("/:team_id", ...updateTeamHandler);

// Delete a team
router.delete("/:team_id", ...deleteTeamHandler);

export default router;