import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchResults(
  authToken: string,
  team_id: string,
  election_id: string
) {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}/elections/${election_id}/results`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
  return res.json();
}

const useResults = (team_id: string, election_id: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["results", team_id, election_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchResults(token as string, team_id, election_id);
    },
  });
};

export default useResults;
