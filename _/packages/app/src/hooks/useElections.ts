import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Election } from "../types/Election";

async function fetchElections(authToken: string, team_id: string) {
  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/teams/${team_id}/elections`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
  return res.json();
}

const useElections = (team_id: string) => {
  const { getToken } = useAuth();

  return useQuery<Election[]>({
    queryKey: ["elections", team_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchElections(token as string, team_id);
    },
  });
};

export default useElections;
