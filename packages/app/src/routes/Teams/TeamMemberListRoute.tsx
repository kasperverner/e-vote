import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamMemberListRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/members/invite",
  component: TeamMemberListPage,
});

function TeamMemberListPage() {
  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default TeamMemberListRoute;
