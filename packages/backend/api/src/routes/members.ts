import express from "express";
import { isAdminOfTeam, isAuthorized, isMemberOfTeam } from "../services/middleware";
import { acceptInvitation, declineInvitation, deleteInvitation, editInvitation, editMemberRole, getInvitations, getTeamMembers, inviteMembers, removeMember } from "../services/members";
import { get } from "http";

const router = express.Router();
router.use(isAuthorized);

// list members of the team if the user is a member of the team
router.get("", isMemberOfTeam, getTeamMembers);

// edit member role if the user is an admin of the team
router.put(":member_id", isAdminOfTeam, editMemberRole);

// remove member from team if the user is an admin of the team
router.delete(":member_id", isAdminOfTeam, removeMember);

// list invitations of the team if the user is an admin of the team
router.get("invitations", isAdminOfTeam, getInvitations);

// invite members to the team if the user is an admin of the team
router.post("invitations", isAdminOfTeam, inviteMembers);

// edit a pending invitation if the user is an admin of the team
router.put("invitations/:invitation_id", isAdminOfTeam, editInvitation);

// delete a pending invitation if the user is an admin of the team
router.delete("invitations/:invitation_id", isAdminOfTeam, deleteInvitation);

// accept pending invitation
router.put("invitations/:invitation_id/accept", isAdminOfTeam, acceptInvitation);

// decline pending invitation
router.put("invitations/:invitation_id/decline", isAdminOfTeam, declineInvitation);

export default router;

