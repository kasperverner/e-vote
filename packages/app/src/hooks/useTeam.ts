import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchTeam(authToken: string, teamId: string) {
  const res = await fetch(`http://localhost:4000/teams/${teamId}`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useTeam = (teamId: string) => {
  const { getToken } = useAuth();

  return useQuery<object>({
    queryKey: ["team", teamId],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeam(token as string, teamId);
    }
  });
};

export default useTeam;