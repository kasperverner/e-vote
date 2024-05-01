import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchElections(authToken: string, team_id: string) {
  const res = await fetch(`http://localhost:4000/teams/${team_id}/elections`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return res.json();
}

const useElections = (team_id: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["elections", team_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchElections(token as string, team_id);
    },
  });
};

export default useElections;
