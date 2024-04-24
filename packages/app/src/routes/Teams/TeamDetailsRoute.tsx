import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug",
  component: TeamDetailsPage,
});

function TeamDetailsPage() {
  const { team_slug } = TeamDetailsRoute.useParams();

  return (
    <div className="">
      <h3>TeamDetailsPage {team_slug}!</h3>
    </div>
  );
}

export default TeamDetailsRoute;
