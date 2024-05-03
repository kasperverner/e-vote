import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";


async function putRevokeInvitation(authToken: string, team_id: string, invitation_id: string) {
  return await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}/members/invitations/${invitation_id}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
}

const useRevokeInvitation = (team_id: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["invitations", team_id],
    mutationFn: async (invitation_id: string) => {
      const token = await getToken();
      return putRevokeInvitation(token as string, team_id, invitation_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invitations", team_id] });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useRevokeInvitation;
