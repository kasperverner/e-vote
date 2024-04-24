import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionVoteRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/$election_slug/vote",
  component: TeamElectionVotePage,
});

function TeamElectionVotePage() {
  const { team_slug, election_slug } =
    TeamElectionVoteRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Team: {team_slug}</p>
      <p>Election: {election_slug}</p>
    </div>
  );
}

export default TeamElectionVoteRoute;
