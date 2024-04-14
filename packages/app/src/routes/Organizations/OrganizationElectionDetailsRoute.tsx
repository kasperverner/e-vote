import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationElectionDetailsRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/elections/$election_slug",
  component: OrganizationElectionDetailsPage,
});

function OrganizationElectionDetailsPage() {
  const { organization_slug, election_slug } =
    OrganizationElectionDetailsRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Organization: {organization_slug}</p>
      <p>Election: {election_slug}</p>
    </div>
  );
}

export default OrganizationElectionDetailsRoute;
