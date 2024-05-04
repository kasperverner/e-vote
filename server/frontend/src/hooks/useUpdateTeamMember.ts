import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function updateTeamMember(
  authToken: string,
  team_id: string,
  member_id: string,
  is_admin: boolean
) {
  return await fetch(`/api/teams/${team_id}/members/${member_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ isAdmin: is_admin }),
  });
}

const useUpdateTeamMember = (team_id: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["team-members", team_id],
    mutationFn: async ({ member_id, is_admin }: { member_id: string, is_admin: boolean }) => {
      const token = await getToken();
      return updateTeamMember(token as string, team_id, member_id, is_admin);
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

export default useUpdateTeamMember;
