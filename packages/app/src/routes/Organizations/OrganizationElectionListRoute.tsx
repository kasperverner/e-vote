import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationElectionListRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/elections",
  component: OrganizationElectionListPage,
});

function OrganizationElectionListPage() {
  const { organization_slug } = OrganizationElectionListRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default OrganizationElectionListRoute;
