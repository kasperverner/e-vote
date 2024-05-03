import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

async function putAcceptInvitation(authToken: string, team_id: string, invitation_id: string) {
  const res = await fetch(`/api/teams/${team_id}/members/invitations/${invitation_id}/accept`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
  return res.json();
}

const useAcceptInvitation = (team_id: string, invitation_id: string) => {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["teams", team_id, "invitations", invitation_id],
    mutationFn: async () => {
      const token = await getToken();
      return putAcceptInvitation(token as string, team_id, invitation_id);
    },
    onSuccess: () => {
      navigate({
        to: "/teams/$team_id",
        params: { team_id },
      });
    }
  })
};

export default useAcceptInvitation;
