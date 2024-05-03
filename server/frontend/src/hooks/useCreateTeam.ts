import { useAuth } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

async function postCreateTeam(authToken: string, name: string) {
  const res = await fetch(`/api/teams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ name: name.trim() }),
  });

  if (!res.ok) throw new Error("Failed to create team");

  return res.json();
}

const useCreateTeam = () => {
  const queryClient = useQueryClient();
  const nagivate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["teams"],
    mutationFn: async ({ name }: { name: string }) => {
      const token = await getToken();
      return postCreateTeam(token as string, name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      nagivate({ to: "/teams" });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useCreateTeam;
