import express from "express";
import { isAdminOfTeam, isAuthorized, isEligibleToEditElection, isEligibleToVote, isMemberOfTeam } from "../services/middleware";
import {
  createElection,
  editElection,
  getElection,
  getBallot,
  getElectionResults,
  getElections,
  voteInElection,
  deleteElection,
} from "../services/elections";


const router = express.Router();
router.use(isAuthorized);

/**
 * GET /teams/:team_id/elections
 * get all elections of the team if the user is a member of the team
 */
router.get("/:team_id/elections/", isMemberOfTeam, getElections);

/**
 * GET /teams/:team_id/elections/:election_id
 * get election by id if the user is a member of the team
 */
router.get("/:team_id/elections/:election_id", isMemberOfTeam, getElection);

/**
 * get /teams/:team_id/elections/:election_id/vote
 * returns the ballot for the election if the user has voted in the election
 */
router.get("/:team_id/elections/:election_id/vote", isMemberOfTeam, getBallot);

/**
 * POST /teams/:team_id/elections/:election_id/vote
 * vote in an election if the user is elegible to vote
 */
router.post("/:team_id/elections/:election_id/vote", isMemberOfTeam, isEligibleToVote, voteInElection);


/**
 * GET /teams/:team_id/elections/:election_id/results
 * get election results if the user is a member of the team
 */
router.get("/:team_id/elections/:election_id/results", isMemberOfTeam, getElectionResults);

/**
 * POST /teams/:team_id/elections
 * create a new election if the user is an admin of the team
 */
router.post("/:team_id/elections/", isAdminOfTeam, createElection);

/**
 * PUT /teams/:team_id/elections/:election_id
 * edit an election if the user is an admin of the team
 */
router.put("/:team_id/elections/:election_id", isAdminOfTeam, isEligibleToEditElection, editElection);

/**
 * DELETE /teams/:team_id/elections/:election_id
 * delete an election if the user is an admin of the team
 */
router.delete("/:team_id/elections/:election_id", isAdminOfTeam, deleteElection);

export default router;
