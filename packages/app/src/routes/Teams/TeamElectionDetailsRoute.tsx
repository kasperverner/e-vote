import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamElectionDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/$election_slug",
  component: TeamElectionDetailsPage,
});

function TeamElectionDetailsPage() {
  const { team_slug, election_slug } =
    TeamElectionDetailsRoute.useParams();

  return (
    <div className="">
      <h3>Steffiboys side!</h3>
      <p>Team: {team_slug}</p>
      <p>Election: {election_slug}</p>
    </div>
  );
}

export default TeamElectionDetailsRoute;
