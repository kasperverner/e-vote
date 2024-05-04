import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function deleteDeleteElection(
  authToken: string,
  team_id: string,
  election_id: string
) {
  return await fetch(`/api/teams/${team_id}/elections/${election_id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${authToken}` },
  });
}

const useDeleteElection = (team_id: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["elections", team_id],
    mutationFn: async (election_id: string) => {
      const token = await getToken();
      return deleteDeleteElection(token as string, team_id, election_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elections", team_id] });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useDeleteElection;
