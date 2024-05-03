import { Navigate, Outlet, createRoute } from "@tanstack/react-router";
import { rootRoute } from "../RootRouter";
import TeamCreateRoute from "./TeamCreateRoute";
import TeamDetailsRoute from "./TeamDetailsRoute";
import TeamElectionCreateRoute from "./TeamElectionCreateRoute";
import TeamElectionDetailsRoute from "./TeamElectionDetailsRoute";
import TeamElectionResultsRoute from "./TeamElectionResultsRoute";
import TeamListRoute from "./TeamListRoute";
import TeamMemberInviteRoute from "./TeamMemberInviteRoute";
import TeamAdminPanelRoute from "./TeamAdminPanelRoute";
import { useSession } from "@clerk/clerk-react";

const TeamIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "teams",
  component: TeamIndexPage,
});

function TeamIndexPage() {
  const { isLoaded, isSignedIn} = useSession();

  if (!isLoaded) {
    return "Loading session...";
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" search={{
      redirectTo: document.location.pathname,
    }} />;
  }

  return <Outlet />;
}

TeamIndexRoute.addChildren([
  TeamCreateRoute,
  TeamDetailsRoute,
  TeamElectionCreateRoute,
  TeamElectionDetailsRoute,
  TeamElectionResultsRoute,
  TeamListRoute,
  TeamMemberInviteRoute,
  TeamAdminPanelRoute,
]);

export default TeamIndexRoute;
