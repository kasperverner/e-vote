import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useElection from "../../hooks/useElection";
import ElectionResults from "../../components/election-details-page/ElectionResults";
import CastVoteForm from "../../components/election-details-page/CastVoteForm";

const TeamElectionDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_id/elections/$election_id",
  component: TeamElectionDetailsPage,
});

function TeamElectionDetailsPage() {
  const { team_id, election_id } = TeamElectionDetailsRoute.useParams();
  const { data: election, isLoading, isError } = useElection(team_id, election_id);

  if (isLoading) {
    return <p>Loading election...</p>;
  }

  if (isError) {
    return <p>Failed to load election</p>;
  }

  if (!election) {
    return <p>Election not found</p>;
  }

  if (election.has_voted)
    return <ElectionResults election={election} />;

  return <CastVoteForm election={election} />;
}

export default TeamElectionDetailsRoute;
