import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Election } from "../types/Election";

async function fetchElection(
  authToken: string,
  team_id: string | undefined,
  election_id: string | undefined
) {
  const res = await fetch(
    `/api/teams/${team_id}/elections/${election_id}`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );

  return await res.json();
}

const useElection = (team_id: string | undefined, election_id: string | undefined) => {
  const { getToken } = useAuth();

  return useQuery<Election>({
    enabled: !!team_id && !!election_id,
    queryKey: ["elections", team_id, election_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchElection(token as string, team_id, election_id);
    },
  });
};

export default useElection;
