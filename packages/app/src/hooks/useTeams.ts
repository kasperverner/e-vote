import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchTeams(authToken: string) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teams`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return res.json();
}

const useTeams = () => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["teams"],
    queryFn: async () => {
      const token = await getToken();
      return fetchTeams(token as string);
    }
  });
};

export default useTeams;
