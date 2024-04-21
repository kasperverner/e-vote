import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationMemberInviteRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "$organization_slug/members",
  component: OrganizationMemberInvitePage,
});

function OrganizationMemberInvitePage() {

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default OrganizationMemberInviteRoute;