import { RequestHandler } from "express";
import db from "../utilities/db.server";

// list members of the team
export const getTeamMembers: RequestHandler = async (req, res) => {
  const { user_id, team_id } = req.params;

  // Find all members of the team
  const members = await db.teamMembers.findMany({
    where: {
      team_id
    },
    select: {
      user: true,
      is_admin: true,
      created_at: true,
    },
    orderBy: {
      is_admin: "desc",
      created_at: "desc",
    }
  });

  return res.status(200).json({ members });
};

// edit member role
export const editMemberRole: RequestHandler = async (req, res) => {
  try {
    const { user_id, member_id } = req.params;

    // Update the team member role if the user is not the member
    const teamMember = await db.teamMembers.update({
      where: {
        id: member_id,
        user_id: {
          not: user_id,
        }
      },
      data: {
        is_admin: req.body.is_admin,
      },
    });

    return res.status(200).json({ teamMember });
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

// remove member from team
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
    return res.status(403).json({ message: "Forbidden" });
  }
};

// list invitations of the team
export const getInvitations: RequestHandler = async (req, res) => {
  const { user_id, team_id } = req.params;

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
            }
          },
        }
      },
    }
  });

  return res.status(200).json({ invitations });
};


// invite members to the team
export const inviteMembers: RequestHandler = async (req, res) => {
  try {
    const { user_id, team_id } = req.params;

    // Create a new invitation
    const invitation = await db.invitations.create({
      data: {
        team_id: team_id,
        invited_by_member_id: user_id,
        email: req.body.email,
        is_admin: req.body.is_admin || false,
      },
    });

    // TODO: Send an email to the invited user

    return res.status(201).json({ invitation });
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

// edit pending invitation
export const editInvitation: RequestHandler = async (req, res) => {
  try {
    const { invitation_id } = req.params;

    // Update the invitation
    const invitation = await db.invitations.update({
      where: {
        id: invitation_id,
        state: "PENDING",
      },
      data: {
        is_admin: req.body.is_admin,
      },
    });

    return res.status(200).json({ invitation });
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

// delete pending invitation
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
      }
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }

};

// accept pending invitation
export const acceptInvitation: RequestHandler = async (req, res) => {
  try {
    const { invitation_id } = req.params;

    // Find the invitation
    const invitation = await db.invitations.findUnique({
      where: {
        id: invitation_id,
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
    return res.status(403).json({ message: "Forbidden" });
  }
};

// decline pending invitation
export const declineInvitation: RequestHandler = async (req, res) => {
  try {
    const { invitation_id } = req.params;

    // Find the invitation
    const invitation = await db.invitations.findUnique({
      where: {
        id: invitation_id,
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
    return res.status(403).json({ message: "Forbidden" });
  }
};