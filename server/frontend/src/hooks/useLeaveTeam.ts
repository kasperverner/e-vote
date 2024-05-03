import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

async function deleteLeaveTeam(authToken: string, team_id: string) {
  return await fetch(`/api/teams/${team_id}/members/leave`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${authToken}` },
  });
}

const useLeaveTeam = (team_id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["teams"],
    mutationFn: async () => {
      const token = await getToken();
      return deleteLeaveTeam(token as string, team_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      navigate({ to: "/teams" });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useLeaveTeam;
