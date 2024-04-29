import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchInvitations(authToken: string, team_slug: string) {
  const res = await fetch(`http://localhost:4000/teams/${team_slug}/members/invitations`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useInvitations = (team_slug: string) => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["invitations", team_slug],
    queryFn: async () => {
      const token = await getToken();
      return fetchInvitations(token as string, team_slug);
    }
  });
};

export default useInvitations;
