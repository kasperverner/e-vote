import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationDetailsRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug",
  component: OrganizationDetailsPage,
});

function OrganizationDetailsPage() {
  const { organization_slug } = OrganizationDetailsRoute.useParams();

  return (
    <div className="">
      <h3>OrganizationDetailsPage {organization_slug}!</h3>
    </div>
  );
}

export default OrganizationDetailsRoute;
