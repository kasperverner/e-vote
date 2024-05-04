import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Invitation } from "../types/Invitation";

async function fetchInvitations(
  authToken: string,
  team_id: string
): Promise<Invitation[]> {
  const res = await fetch(`/api/teams/${team_id}/members/invitations`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return await res.json();
}

const useInvitations = (team_id: string) => {
  const { getToken } = useAuth();

  return useQuery<Invitation[]>({
    queryKey: ["invitations", team_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchInvitations(token as string, team_id);
    },
  });
};

export default useInvitations;
