import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function postCreateInvitation(
  authToken: string,
  team_id: string,
  email: string,
  is_admin: boolean
) {
  const res = await fetch(`/api/teams/${team_id}/members/invitations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ email, is_admin }),
  });

  if (!res.ok) throw new Error("Failed to create invitation");

  return await res.json();
}

const useCreateInvitation = (team_id: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["invitations", team_id],
    mutationFn: async ({
      email,
      is_admin = false,
    }: {
      email: string;
      is_admin?: boolean;
    }) => {
      const token = await getToken();
      return postCreateInvitation(token as string, team_id, email, is_admin);
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

export default useCreateInvitation;
