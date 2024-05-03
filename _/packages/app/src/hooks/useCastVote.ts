import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

async function putCastVote(
  authToken: string,
  team_id: string,
  election_id: string,
  proposition_id: string
) {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}/elections/${election_id}/vote`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ proposition_id }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to cast vote");
  }

  return res.json();
}

const useCastVote = (team_id: string, election_id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  return useMutation({
    mutationKey: ["elections", team_id, election_id],
    mutationFn: async (proposition_id: string) => {
      const token = await getToken();
      return putCastVote(token as string, team_id, election_id, proposition_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["elections", team_id, election_id],
      });
      navigate({
        to: "/teams/$team_id",
        params: { team_id },
      });
    },
    onError: (error) => {
      console.error(error);
      alert(error.message);
    },
  });
};

export default useCastVote;
