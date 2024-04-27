import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionCreateRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/new",
  component: TeamElectionCreatePage,
});

function TeamElectionCreatePage() {
  // const { team_slug } = TeamElectionCreateRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
    </div>
  );
}

export default TeamElectionCreateRoute;
