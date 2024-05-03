import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

export type ElectionRequest = {
  name: string;
  description?: string;
  start_at: string;
  end_at: string;
  propositions: Array<{
    name: string;
    description?: string;
  }>;
};

async function postCreateElection(
  authToken: string,
  team_id: string,
  data: ElectionRequest
) {
  const { start_at, end_at, ...rest } = data;

  const res = await fetch(`/api/teams/${team_id}/elections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      ...rest,
      start_at: new Date(start_at).toISOString(),
      end_at: new Date(end_at).toISOString(),
    }),
  });

  if (!res.ok) throw new Error("Failed to create invitation");

  return res.json();
}

const useCreateElection = (team_id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["elections", team_id],
    mutationFn: async (data: ElectionRequest) => {
      const token = await getToken();
      return postCreateElection(token as string, team_id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elections", team_id] });
      navigate({ to: `/teams/${team_id}/admin`, params: { team_id } });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useCreateElection;
