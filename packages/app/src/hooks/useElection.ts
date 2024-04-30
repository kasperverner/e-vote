import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchElection(authToken: string, team_slug: string, election_slug: string) {
  const res = await fetch(`http://localhost:4000/teams/${team_slug}/elections/${election_slug}`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useElection = (team_slug: string, election_slug: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["elections", team_slug],
    queryFn: async () => {
      const token = await getToken();
      return fetchElection(token as string, team_slug, election_slug);
    }
  });
};

export default useElection;