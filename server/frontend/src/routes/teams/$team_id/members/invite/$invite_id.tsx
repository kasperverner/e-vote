/* eslint-disable react-hooks/rules-of-hooks */
import { createFileRoute, useParams } from "@tanstack/react-router";
import useAcceptInvitation from "@/hooks/useAcceptInvitation";
import useDeclineInvitation from "@/hooks/useDeclineInvitation";
import useInvitation from "@/hooks/useInvitation";
import Button from "@/components/form/button";

export const Route = createFileRoute(
  "/teams/$team_id/members/invite/$invite_id"
)({
  component: () => {
    const team_id = useParams({
      from: "/teams/$team_id/members/invite/$invite_id",
      select: ({ team_id }) => team_id,
    });
    const invite_id = useParams({
      from: "/teams/$team_id/members/invite/$invite_id",
      select: ({ invite_id }) => invite_id,
    });
    const acceptInvitation = useAcceptInvitation(team_id, invite_id);
    const declineInvitation = useDeclineInvitation(team_id, invite_id);

    const {
      data: invitation,
      isLoading,
      isError,
    } = useInvitation(team_id, invite_id);

    if (isLoading) {
      return (
        <div className="flex flex-row mt-8">
          <span className="font-semibold text-xl mx-auto">Loading...</span>
        </div>
      );
    }

    if (isError || !invitation) {
      return (
        <div className="flex flex-row mt-8">
          <span className="font-semibold text-xl mx-auto">
            Error loading invitation with ID {invite_id}...
          </span>
        </div>
      );
    }

    if (invitation.state !== "PENDING") {
      return (
        <div className="flex flex-row mt-8">
          <span className="font-semibold text-xl mx-auto">
            This invitation is no longer available...
          </span>
        </div>
      );
    }

    if (acceptInvitation.isPending) {
      return (
        <div className="flex flex-row mt-8">
          <span className="font-semibold text-xl mx-auto">
            Accepting invitation...
          </span>
        </div>
      );
    }

    if (declineInvitation.isPending) {
      return (
        <div className="flex flex-row mt-8">
          <span className="font-semibold text-xl mx-auto">
            Declining invitation...
          </span>
        </div>
      );
    }

    return (
      <div className="flex flex-col mt-8">
        <h1 className="text-3xl">
          You have been invited to join{" "}
          <span className="font-bold">{invitation.team.name}</span>
          {invitation.is_admin && " as an admin"}
        </h1>
        <small className="text-xs font-light mb-4">
          Created at: {new Date(invitation.created_at).toLocaleDateString()}
        </small>
        <p>
          This invitation was created by{" "}
          <b>{invitation.invited_by_member.user.name}</b> and sent to the email
          address <b>{invitation.email}</b>
        </p>
        <div className="flex mt-8 space-x-2">
          <Button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={declineInvitation.mutate}
          >
            Decline Invitation
          </Button>
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={acceptInvitation.mutate}
          >
            Accept Invitation
          </Button>
        </div>
      </div>
    );
  },
});
