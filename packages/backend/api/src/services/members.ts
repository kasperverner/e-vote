import { RequestHandler } from "express";
import db from "../utilities/db.server";

/**
 * Get all members of the team
 * @param team_id: string
 * @returns members: TeamMember[]
 */
export const getTeamMembers: RequestHandler = async (req, res) => {
  const { team_id } = req.params;

  // Find all members of the team
  const members = await db.teamMembers.findMany({
    where: {
      team_id,
    },
    select: {
      user: true,
      is_admin: true,
      created_at: true,
    },
    orderBy: {
      is_admin: "desc",
      created_at: "desc",
    },
  });

  return res.status(200).json({ members });
};

/**
 * Update the role of a team member
 * @param user_id: string
 * @param member_id: string
 * @param isAdmin: boolean
 * @returns teamMember: TeamMember
 */
export const editMemberRole: RequestHandler = async (req, res) => {
  try {
    const { user_id, member_id } = req.params;
    const { isAdmin } = req.body;

    // Update the team member role
    const teamMember = await db.teamMembers.update({
      where: {
        id: member_id,
        user_id: {
          not: user_id,
        },
      },
      data: {
        is_admin: isAdmin,
      },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Remove a team member
 * @param member_id: string
 */
export const removeMember: RequestHandler = async (req, res) => {
  try {
    const { member_id } = req.params;

    // Delete the team member
    await db.teamMembers.delete({
      where: {
        id: member_id,
      },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Get all invitations of the team
 * @param team_id: string
 * @returns invitations: Invitation[]
 */
export const getInvitations: RequestHandler = async (req, res) => {
  try {
    const { team_id } = req.params;

    // Find all invitations of the team
    const invitations = await db.invitations.findMany({
      where: {
        team_id,
      },
      select: {
        email: true,
        is_admin: true,
        created_at: true,
        updated_at: true,
        state: true,
        invited_by_member: {
          select: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).json({ invitations });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Invite members to the team
 * @param user_id: string
 * @param team_id: string
 * @param email: string
 * @param is_admin: boolean
 * @returns invitation: Invitation
 */
export const inviteMembers: RequestHandler = async (req, res) => {
  try {
    const { user_id, team_id } = req.params;
    const { email, isAdmin } = req.body;

    // Create a new invitation
    const invitation = await db.invitations.create({
      data: {
        team_id: team_id,
        invited_by_member_id: user_id,
        email,
        is_admin: isAdmin,
      },
    });

    return res.status(201).json({ invitation });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Edit pending invitation
 * @param invitation_id: string
 * @param isAdmin: boolean
 * @returns 204
 */
export const editInvitation: RequestHandler = async (req, res) => {
  try {
    const { invitation_id } = req.params;
    const { isAdmin } = req.body;

    // Update the invitation
    const invitation = await db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
      },
      data: {
        is_admin: isAdmin,
      },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Delete pending invitation
 * @param invitation_id: string
 * @returns 204
 */
export const deleteInvitation: RequestHandler = async (req, res) => {
  try {
    const { invitation_id } = req.params;

    // Update the invitation state to DELETED
    await db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
      },
      data: {
        state: "DELETED",
      },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Accept an invitation
 * @param invitation_id: string
 * @returns teamMember: TeamMember
 */
export const acceptInvitation: RequestHandler = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the invitation
    const invitation = await db.invitations.findUnique({
      where: {
        token: token,
        state: "PENDING",
      },
    });

    if (!invitation) {
      return res.status(404).json({ message: "Invitation not found" });
    }

    // Create a new team member
    const teamMember = await db.teamMembers.create({
      data: {
        team_id: invitation.team_id,
        user_id: invitation.invited_by_member_id,
        is_admin: invitation.is_admin,
      },
    });

    // Update the invitation state to ACCEPTED
    await db.invitations.update({
      where: {
        id: invitation.id,
      },
      data: {
        state: "ACCEPTED",
      },
    });

    return res.status(201).json({ teamMember });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Decline pending invitation
 * @param invitation_id: string
 * @returns 204
 */
export const declineInvitation: RequestHandler = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the invitation
    const invitation = await db.invitations.findUnique({
      where: {
        token: token,
        state: "PENDING",
      },
    });

    if (!invitation) {
      return res.status(404).json({ message: "Invitation not found" });
    }

    // Update the invitation state to DECLINED
    await db.invitations.update({
      where: {
        id: invitation.id,
      },
      data: {
        state: "DECLINED",
      },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
