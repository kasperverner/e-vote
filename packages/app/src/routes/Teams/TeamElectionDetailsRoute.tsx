import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useElection from "../../hooks/useElection";

const TeamElectionDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/$election_slug",
  component: TeamElectionDetailsPage,
});

function TeamElectionDetailsPage() {
  const { team_slug, election_slug } = TeamElectionDetailsRoute.useParams();
  const currentDate = new Date();
  // const { getToken } = useAuth();
  const { data: election } = useElection(team_slug, election_slug);

  if (!election) {
    return <div>Loading...</div>
  }

  console.log(election);

  const startAt = new Date(election.start_at);
  const endAt = new Date(election.end_at);
  const hasVoted = (election.has_voted) as boolean;

  if (currentDate < startAt) {
    return <div>The election has not started yet.</div>
  } else if (currentDate > endAt) {
    return <div>See results here.</div>
  } else if (hasVoted) {
    return <div>You have already voted. Come back later to see results.</div>
  } else {
    return <div>Vote now!</div>
  }
}

export default TeamElectionDetailsRoute;
