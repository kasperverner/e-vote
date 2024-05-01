import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function putRenameTeam(authToken: string, teamId: string, name: string) {
  return await fetch(`http://localhost:4000/teams/${teamId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`
    },
    body: JSON.stringify({ name })
  });
}

const useRenameTeam = (teamId: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["team", teamId],
    mutationFn: async (name: string) => {
      const token = await getToken();
      return putRenameTeam(token as string, teamId, name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ "team" ] });
      queryClient.invalidateQueries({ queryKey: [ "team", teamId ] });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    }
  });
};

export default useRenameTeam;