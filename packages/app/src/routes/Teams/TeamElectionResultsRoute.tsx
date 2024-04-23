import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionResultsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/$election_slug/results",
  component: TeamElectionResultsPage,
});

function TeamElectionResultsPage() {
  const { team_slug, election_slug } =
    TeamElectionResultsRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Team: {team_slug}</p>
      <p>Election: {election_slug}</p>
    </div>
  );
}

export default TeamElectionResultsRoute;
