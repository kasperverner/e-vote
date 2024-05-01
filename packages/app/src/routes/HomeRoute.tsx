import { Link, Navigate, createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RootRouter";
import { useSession } from "@clerk/clerk-react";

const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

function HomePage() {
  const { isLoaded, isSignedIn } = useSession();

  if (!isLoaded) {
    return "Loading session...";
  }

  if (!isSignedIn) {
    return (
      <Navigate
        to="/sign-in"
        search={{
          redirectTo: document.location.pathname,
        }}
      />
    );
  }

  return <Navigate to="/teams" />;
}

export default HomeRoute;
