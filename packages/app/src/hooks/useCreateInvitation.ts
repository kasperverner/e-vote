import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function postCreateInvitation(
  authToken: string,
  team_id: string,
  email: string,
  isAdmin: boolean
) {
  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/teams/${team_id}/members/invitations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify({ email, isAdmin }),
    }
  );

  if (!res.ok)
    throw new Error("Failed to create invitation");

  return res.json();
}

const useCreateInvitation = (team_id: string) => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["invitations", team_id],
    mutationFn: async ({
      email,
      isAdmin = false,
    }: {
      email: string;
      isAdmin?: boolean;
    }) => {
      const token = await getToken();
      return postCreateInvitation(token as string, team_id, email, isAdmin);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invitations", team_id] })
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useCreateInvitation;
