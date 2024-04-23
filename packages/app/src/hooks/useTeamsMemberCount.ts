import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

// route: /teams/:team_id/members/count

async function fetchTeamMemberCount(teamId: string, authToken: string) {
  const res = await fetch(`http://localhost:4000/teams/${teamId}/members/count`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useTeamMemberCount = (teamId: string) => {
  const { getToken } = useAuth();

  return useQuery<number>({
    queryKey: ["teamMemberCount", teamId],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeamMemberCount(teamId, token as string);
    }
  });
};

export default useTeamMemberCount;