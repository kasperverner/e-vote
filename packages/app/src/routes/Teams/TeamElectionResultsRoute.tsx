import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionResultsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_id/elections/$election_id/results",
  component: TeamElectionResultsPage,
});

function TeamElectionResultsPage() {
  const { team_id, election_id } = TeamElectionResultsRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Team: {team_id}</p>
      <p>Election: {election_id}</p>
    </div>
  );
}

export default TeamElectionResultsRoute;
