import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationMemberListRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/members/invite",
  component: OrganizationMemberListPage,
});

function OrganizationMemberListPage() {
  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default OrganizationMemberListRoute;
