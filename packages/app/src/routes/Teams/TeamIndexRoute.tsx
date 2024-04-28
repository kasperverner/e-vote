import { Outlet, createRoute } from "@tanstack/react-router";
import { rootRoute } from "../RootRouter";
import TeamCreateRoute from "./TeamCreateRoute";
import TeamDetailsRoute from "./TeamDetailsRoute";
import TeamElectionCreateRoute from "./TeamElectionCreateRoute";
import TeamElectionDetailsRoute from "./TeamElectionDetailsRoute";
import TeamElectionListRoute from "./TeamElectionListRoute";
import TeamElectionResultsRoute from "./TeamElectionResultsRoute";
import TeamElectionVoteRoute from "./TeamElectionVoteRoute";
import TeamListRoute from "./TeamListRoute";
import TeamMemberInviteRoute from "./TeamMemberInviteRoute";
import TeamMemberListRoute from "./TeamMemberListRoute";
import TeamAdminPanelRoute from "./TeamAdminPanelRoute";

const TeamIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "teams",
  component: TeamIndexPage,
});

function TeamIndexPage() {
  // Since all routes under this route are protected, we can make a protected route here,
  // where we will add an auth check and redirect to / if user is not authenticated

  return <Outlet />;
}

TeamIndexRoute.addChildren([
  TeamCreateRoute,
  TeamDetailsRoute,
  TeamElectionCreateRoute,
  TeamElectionDetailsRoute,
  TeamElectionListRoute,
  TeamElectionResultsRoute,
  TeamElectionVoteRoute,
  TeamListRoute,
  TeamMemberInviteRoute,
  TeamMemberListRoute,
  TeamAdminPanelRoute,
]);

export default TeamIndexRoute;
