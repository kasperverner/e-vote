import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationMemberListRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/members",
  component: OrganizationMemberListPage,
});

function OrganizationMemberListPage() {
  const { organization_slug } = OrganizationMemberListRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default OrganizationMemberListRoute;
