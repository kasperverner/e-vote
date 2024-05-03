import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Team } from "../types/Team";

async function fetchTeams(authToken: string) {
  const res = await fetch(`/api/teams`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return res.json();
}

const useTeams = () => {
  const { getToken } = useAuth();

  return useQuery<Team[]>({
    queryKey: ["teams"],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeams(token as string);
    },
  });
};

export default useTeams;
