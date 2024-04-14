import { Outlet, createRoute } from "@tanstack/react-router";
import { rootRoute } from "../RootRouter";
import OrganizationCreateRoute from "./OrganizationCreateRoute";
import OrganizationDetailsRoute from "./OrganizationDetailsRoute";
import OrganizationElectionCreateRoute from "./OrganizationElectionCreateRoute";
import OrganizationElectionDetailsRoute from "./OrganizationElectionDetailsRoute";
import OrganizationElectionListRoute from "./OrganizationElectionListRoute";
import OrganizationElectionResultsRoute from "./OrganizationElectionResultsRoute";
import OrganizationElectionVoteRoute from "./OrganizationElectionVoteRoute";
import OrganizationListRoute from "./OrganizationListRoute";
import OrganizationMemberInviteRoute from "./OrganizationMemberInviteRoute";
import OrganizationMemberListRoute from "./OrganizationMemberListRoute";

const OrganizationIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "organizations",
  component: OrganizationIndexPage,
});

function OrganizationIndexPage() {
  // Since all routes under this route are protected, we can make a protected route here,
  // where we will add an auth check and redirect to / if user is not authenticated

  return <Outlet />;
}

OrganizationIndexRoute.addChildren([
  OrganizationCreateRoute,
  OrganizationDetailsRoute,
  OrganizationElectionCreateRoute,
  OrganizationElectionDetailsRoute,
  OrganizationElectionListRoute,
  OrganizationElectionResultsRoute,
  OrganizationElectionVoteRoute,
  OrganizationListRoute,
  OrganizationMemberInviteRoute,
  OrganizationMemberListRoute,
]);

export default OrganizationIndexRoute;
