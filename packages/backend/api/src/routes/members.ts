import express from "express";
import { isAdminOfTeam, isAuthorized, isMemberOfTeam } from "../services/middleware";
import { acceptInvitation, declineInvitation, deleteInvitation, editInvitation, editMemberRole, getInvitations, getTeamMembers, inviteMembers, leaveTeam, removeMember } from "../services/members";

const router = express.Router();
router.use(isAuthorized);

/**
 * GET /teams/:team_id/members
 * get all members of the team if the user is a member of the team
 */
router.get("/:team_id/members/", isMemberOfTeam, getTeamMembers);

/**
 * PUT /teams/:team_id/members/:member_id
 * edit member role if the user is an admin of the team
 */
router.put("/:team_id/members/:member_id", isAdminOfTeam, editMemberRole);

/**
 * DELETE /teams/:team_id/members
 * users can remove themselves from the team
 */
router.delete("/:team_id/members/leave", isMemberOfTeam, leaveTeam);

/**
 * DELETE /teams/:team_id/members/:member_id
 * remove member from team if the user is an admin of the team
 */
router.delete("/:team_id/members/:member_id", isAdminOfTeam, removeMember);

/**
 * GET /teams/:team_id/members/invitations
 * list invitations of the team if the user is an admin of the team
 */
router.get("/:team_id/members/invitations", isAdminOfTeam, getInvitations);

/**
 * POST /teams/:team_id/members/invitations
 * invite members to the team if the user is an admin of the team
 */
router.post("/:team_id/members/invitations", isAdminOfTeam, inviteMembers);

/**
 * PUT /teams/:team_id/members/invitations/:invitation_id
 * edit pending invitation if the user is an admin of the team
 */
router.put("/:team_id/members/invitations/:invitation_id", isAdminOfTeam, editInvitation);

/**
 * DELETE /teams/:team_id/members/invitations/:invitation_id
 * delete pending invitation if the user is an admin of the team
 */
router.delete("/:team_id/members/invitations/:invitation_id", isAdminOfTeam, deleteInvitation);

/**
 * PUT /teams/:team_id/members/invitations/:invitation_id/accept
 * accept pending invitation if the user is an admin of the team
 */
router.put("/:team_id/members/invitations/:invitation_id/accept", acceptInvitation);

/**
 * PUT /teams/:team_id/members/invitations/:invitation_id/decline
 * decline pending invitation if the user is an admin of the team
 */
router.put("/:team_id/members/invitations/:invitation_id/decline", declineInvitation);

export default router;
