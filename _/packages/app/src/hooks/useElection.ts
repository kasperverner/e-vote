import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Election } from "../types/Election";

async function fetchElection(
  authToken: string,
  team_id: string,
  election_id: string
) {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}/elections/${election_id}`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
  return res.json();
}

const useElection = (team_id: string, election_id: string) => {
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
