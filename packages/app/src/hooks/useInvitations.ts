import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Invitation } from "../types/Invitation";

async function fetchInvitations(authToken: string, team_slug: string) : Promise<Invitation[]> {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teams/${team_slug}/members/invitations`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  return res.json();
}

const useInvitations = (team_slug: string) => {
  const { getToken } = useAuth();

  return useQuery<Invitation[]>({
    queryKey: ["invitations", team_slug],
    queryFn: async () => {
      const token = await getToken();
      return fetchInvitations(token as string, team_slug);
    },
  });
};

export default useInvitations;
