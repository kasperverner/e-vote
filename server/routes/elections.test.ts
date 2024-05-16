import factory from "../factory";
import isAuthorized from "../middleware/isAuthorized.test";
import {
  createElectionHandler,
  createVoteHandler,
  deleteElectionHandler,
  endElectionHandler,
  getElectionHandler,
  getElectionsHandler,
  getResultsHandler,
  getValidationHandler,
  startElectionHandler,
  updateElectionHandler,
} from "../services/elections";

/**
 * The router for the elections endpoints.
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = factory
  .createApp()
  .basePath("/:team_id/elections")
  .use(isAuthorized);

// Get all elections for a team
router.get("/", ...getElectionsHandler);

// Create a new election for a team
router.post("/", ...createElectionHandler);

// Get a specific election for a team
router.get("/:election_id", ...getElectionHandler);

// Update a specific election for a team
router.put("/:election_id", ...updateElectionHandler);

// Delete a specific election for a team
router.delete("/:election_id", ...deleteElectionHandler);

// Get the result for an election
router.get("/:election_id/result", ...getResultsHandler);

// Get the validation for an election
router.get("/:election_id/validation", ...getValidationHandler);

// Vote on a proposition for an election
router.post("/:election_id/vote", ...createVoteHandler);

// Start a pending election
router.put("/:election_id/start", ...startElectionHandler);

// End an active election
router.put("/:election_id/end", ...endElectionHandler);

export default router;
