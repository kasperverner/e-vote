import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useSession } from "@clerk/clerk-react";

export const Route = createFileRoute('/')({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoaded, isSignedIn } = useSession();

    if (!isLoaded) return <p>Loading session...</p>;

    if (!isSignedIn) return <Navigate to="/sign-in" />;

    return <Navigate to="/teams" />;
  },
});
