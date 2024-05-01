import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function deleteDeleteTeamMember(
  authToken: string,
  team_id: string,
  member_id: string
) {
  return await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}/members/${member_id}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
}

const useDeleteTeamMember = (team_id: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["team-members", team_id],
    mutationFn: async (member_id: string) => {
      const token = await getToken();
      return deleteDeleteTeamMember(token as string, team_id, member_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members", team_id] });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useDeleteTeamMember;
