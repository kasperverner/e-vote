import { Outlet, createRoute } from "@tanstack/react-router";
import { rootRoute } from "../RootRouter";
import OrganizationsRoute from "./OrganizationListRoute";
import OrganizationDetailsRoute from "./OrganizationDetailsRoute";
import OrganizationElectionListRoute from "./OrganizationElectionListRoute";
import OrganizationElectionDetailsRoute from "./OrganizationElectionDetailsRoute";

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
  OrganizationsRoute,
  OrganizationDetailsRoute,
  OrganizationElectionListRoute,
  OrganizationElectionDetailsRoute,
]);

export default OrganizationIndexRoute;
