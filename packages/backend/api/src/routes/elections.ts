import express from "express";
import { isAdminOfTeam, isAuthorized, isEligibleToEditElection, isEligibleToVote, isMemberOfTeam } from "../services/middleware";
import { createElection, editElection, getElection, getElectionResults, getElections, voteInElection } from "../services/elections";


const router = express.Router();
router.use(isAuthorized);

// get all elections of the team
router.get("/", isMemberOfTeam, getElections);

// get election by id if the user is a member of the team
router.get("/:election_id", isMemberOfTeam, getElection);

// vote in an election if the user is elegible to vote
router.post("/:election_id/vote", isMemberOfTeam, isEligibleToVote, voteInElection);

// get election results by id
router.get("/:election_id/results", isMemberOfTeam, getElectionResults);

// create a new election
router.post("/", isAdminOfTeam, createElection);

// edit a pending election
router.put("/:election_id", isAdminOfTeam, isEligibleToEditElection, editElection);




export default router;
