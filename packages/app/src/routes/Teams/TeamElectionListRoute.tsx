import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionListRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections",
  component: TeamElectionListPage,
});

function TeamElectionListPage() {
  // const { team_slug } = TeamElectionListRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default TeamElectionListRoute;
