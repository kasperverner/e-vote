import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Team } from "../types/Team";

async function fetchTeam(authToken: string, teamId: string) {
  const res = await fetch(`/api/teams/${teamId}`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return await res.json();
}

const useTeam = (teamId: string) => {
  const { getToken } = useAuth();

  return useQuery<Team>({
    enabled: !!teamId,
    queryKey: ["team", teamId],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeam(token as string, teamId);
    },
  });
};

export default useTeam;
