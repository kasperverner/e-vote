import factory from "../factory";
import isAuthorized from "../middleware/isAuthorized.test";
import {
  acceptInvitationHandler,
  createInvitationHandler,
  declineInvitationHandler,
  deleteInvitationHandler,
  deleteMemberHandler,
  getInvitationHandler,
  getInvitationsHandler,
  getMembersHandler,
  leaveTeamHandler,
  updateInvitationHandler,
  updateMemberHandler,
} from "../services/members";

/**
 * The router for the members endpoints.
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const router = factory
  .createApp()
  .basePath("/:team_id/members")
  .use(isAuthorized);

// Get all members of a team
router.get("/", ...getMembersHandler);

// Update the role of a member
router.put("/:member_id", ...updateMemberHandler);

// Leave a team
router.delete("/leave", ...leaveTeamHandler);

// Delete a team member
router.delete("/:member_id", ...deleteMemberHandler);

// Get all invitations for a team
router.get("/invitations", ...getInvitationsHandler);

// Invite a user to a team
router.post("/invitations", ...createInvitationHandler);

// Get a specific invitation for a team
router.get("/invitations/:invitation_id", ...getInvitationHandler);

// Update a specific invitation for a team
router.put("/invitations/:invitation_id", ...updateInvitationHandler);

// Delete a specific invitation for a team
router.delete("/invitations/:invitation_id", ...deleteInvitationHandler);

// Accept an invitation
router.put("/invitations/:invitation_id/accept", ...acceptInvitationHandler);

// Decline an invitation
router.put("/invitations/:invitation_id/decline", ...declineInvitationHandler);

export default router;
