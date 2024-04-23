import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamMemberInviteRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/members",
  component: TeamMemberInvitePage,
});

function TeamMemberInvitePage() {

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default TeamMemberInviteRoute;
