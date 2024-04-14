import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationListRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "/",
  component: OrganizationListPage,
});

function OrganizationListPage() {
  // add auth check here and redirect to / if not authenticated
  return (
    <div className="">
      <h3>OrganizationListPage</h3>
    </div>
  );
}

export default OrganizationListRoute;
