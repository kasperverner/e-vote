import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationElectionCreateRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/elections/new",
  component: OrganizationElectionCreatePage,
});

function OrganizationElectionCreatePage() {
  const { organization_slug } = OrganizationElectionCreateRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default OrganizationElectionCreateRoute;
