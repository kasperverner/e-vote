import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { TeamMember } from "../types/TeamMember";

async function fetchTeamMembers(authToken: string, teamId: string) {
  const res = await fetch(`/api/teams/${teamId}/members`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return res.json();
}

const useTeamMembers = (teamId: string) => {
  const { getToken } = useAuth();

  return useQuery<TeamMember[]>({
    queryKey: ["team-members", teamId],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeamMembers(token as string, teamId);
    },
  });
};

export default useTeamMembers;
