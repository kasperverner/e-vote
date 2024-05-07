import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { ElectionValidation } from "../types/ElectionValidation";

async function fetchElectionValidation(
  authToken: string,
  team_id: string,
  election_id: string
): Promise<ElectionValidation | undefined>{
  const res = await fetch(
    `/api/teams/${team_id}/elections/${election_id}/validation`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch election validation");
  }

  if (res.status === 204)
    return;

  return await res.json();
}

const useElectionValidation = (team_id: string, election_id: string) => {
  const { getToken } = useAuth();

  return useQuery<ElectionValidation | undefined>({
    queryKey: ["validation", team_id, election_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchElectionValidation(token as string, team_id, election_id);
    },
  });
};

export default useElectionValidation;
