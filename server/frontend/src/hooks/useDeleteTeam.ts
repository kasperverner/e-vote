import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

async function deleteTeam(
  authToken: string,
  team_id: string
) {
  return await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
}

const useDeleteTeam = (team_id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["teams"],
    mutationFn: async () => {
      const token = await getToken();
      return deleteTeam(token as string, team_id);
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

export default useDeleteTeam;
