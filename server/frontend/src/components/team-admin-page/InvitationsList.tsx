import { useParams } from "@tanstack/react-router";
import useInvitations from "../../hooks/useInvitations";
import Button from "../form/button";
import useRevokeInvitation from "../../hooks/useRevokeInvitation";

const copyLink = (path: string) => {
  const fullPath = document.location.origin + path;

  navigator.clipboard
    .writeText(fullPath)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy link: ", err);
    });
};

const InvitationsList = () => {
  const team_id = useParams({
    from: "/teams/$team_id/admin",
    select: ({ team_id }) => team_id,
  });

  const { data: invitations, isLoading } = useInvitations(team_id);
  const revokeInvitation = useRevokeInvitation(team_id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!invitations || invitations.length === 0) {
    return <p>No invitations was found</p>;
  }

  return (
    <ul className="flex flex-col space-y-4 h-full ml-4">
      {[
        ...invitations.filter((inv) => inv.state === "PENDING"),
        ...invitations.filter((inv) => inv.state === "ACCEPTED"),
        ...invitations.filter((inv) => inv.state === "DECLINED"),
      ].map((invitation, index) => (
        <li
          key={invitation.email + index}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg">{invitation.email}</h3>
            <p>Invited by: {invitation.invited_by}</p>{" "}
            {/* Added line */}
          </div>
          {invitation.state === "PENDING" && (
            <div>
              <Button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() =>
                  copyLink(`/teams/${team_id}/members/invite/${invitation.id}`)
                }
              >
                Copy link
              </Button>
              <Button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => revokeInvitation.mutate(invitation.id)}
              >
                Revoke
              </Button>
            </div>
          )}
          {invitation.state === "DECLINED" && (
            <span className="text-red-500">Declined</span>
          )}
          {invitation.state === "ACCEPTED" && (
            <span className="text-green-500">Accepted</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default InvitationsList;
