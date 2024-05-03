import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Invitation } from "../types/Invitation";

async function fetchInvitation(
  authToken: string,
  team_id: string,
  invitation_id: string
): Promise<Invitation> {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/teams/${team_id}/members/invitations/${invitation_id}`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch invitation with ID ${invitation_id}`);
  }

  return res.json();
}

const useInvitation = (team_id: string, invitation_id: string) => {
  const { getToken } = useAuth();

  return useQuery<Invitation>({
    queryKey: ["teams", team_id, "invitations", invitation_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchInvitation(token as string, team_id, invitation_id);
    }
  });
};

export default useInvitation;
