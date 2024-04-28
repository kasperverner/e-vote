import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchElections(authToken: string, team_slug: string) {
  const res = await fetch(`http://localhost:4000/teams/${team_slug}/elections`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useElections = (team_slug: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["elections", team_slug],
    queryFn: async () => {
      const token = await getToken();
      return fetchElections(token as string, team_slug);
    }
  });
};

export default useElections;