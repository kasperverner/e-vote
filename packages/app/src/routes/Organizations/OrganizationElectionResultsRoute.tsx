import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationElectionResultsRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/elections/$election_slug/results",
  component: OrganizationElectionResultsPage,
});

function OrganizationElectionResultsPage() {
  const { organization_slug, election_slug } =
    OrganizationElectionResultsRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Organization: {organization_slug}</p>
      <p>Election: {election_slug}</p>
    </div>
  );
}

export default OrganizationElectionResultsRoute;
