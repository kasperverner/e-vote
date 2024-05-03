import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

async function putDeclineInvitation(
  authToken: string,
  team_id: string,
  invitation_id: string
) {
  return await fetch(
    `/api/teams/${team_id}/members/invitations/${invitation_id}/decline`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
}

const useDeclineInvitation = (team_id: string, invitation_id: string) => {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["teams", team_id, "invitations", invitation_id],
    mutationFn: async () => {
      const token = await getToken();
      return putDeclineInvitation(token as string, team_id, invitation_id);
    },
    onSuccess: () => {
      navigate({
        to: "/teams",
      });
    },
  });
};

export default useDeclineInvitation;
