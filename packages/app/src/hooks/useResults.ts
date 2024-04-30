import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchResults(authToken: string, team_slug: string, election_slug: string) {
  const res = await fetch(`http://localhost:4000/teams/${team_slug}/elections/${election_slug}/results`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useResults = (team_slug: string, election_slug: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["results", team_slug, election_slug],
    queryFn: async () => {
      const token = await getToken();
      return fetchResults(token as string, team_slug, election_slug);
    }
  });
};

export default useResults;