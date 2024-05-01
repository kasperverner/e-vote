import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionVoteRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_id/elections/$election_id/vote",
  component: TeamElectionVotePage,
});

function TeamElectionVotePage() {
  const { team_id, election_id } = TeamElectionVoteRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Team: {team_id}</p>
      <p>Election: {election_id}</p>
    </div>
  );
}

export default TeamElectionVoteRoute;
