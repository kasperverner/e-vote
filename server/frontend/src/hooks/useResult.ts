import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { Result } from "../types/Result";

async function fetchResult(
  authToken: string,
  team_id: string,
  election_id: string
) {
  const res = await fetch(
    `/api/teams/${team_id}/elections/${election_id}/result`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
  return await res.json();
}

const useResult = (team_id: string, election_id: string) => {
  const { getToken } = useAuth();

  return useQuery<Result>({
    queryKey: ["results", team_id, election_id],
    queryFn: async () => {
      const token = await getToken();
      return fetchResult(token as string, team_id, election_id);
    },
  });
};

export default useResult;
