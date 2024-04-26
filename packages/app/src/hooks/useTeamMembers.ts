import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchTeamMembers(authToken: string, teamId: string) {
  const res = await fetch(`http://localhost:4000/teams/${teamId}/members`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useTeamMembers = (teamId: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["team-members", teamId],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeamMembers(token as string, teamId);
    }
  });
};

export default useTeamMembers;