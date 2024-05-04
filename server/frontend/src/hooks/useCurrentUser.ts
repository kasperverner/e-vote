import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

async function fetchCurrentUser(authToken: string) {
  const res = await fetch(`/api/users`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return await res.json();
}

const useCurrentUser = () => {
  const { getToken } = useAuth();

  return useQuery<object[]>({
    queryKey: ["user"],
    queryFn: async () => {
      const token = await getToken();
      return fetchCurrentUser(token as string);
    },
  });
};

export default useCurrentUser;
