/* eslint-disable react-hooks/rules-of-hooks */
import { createFileRoute, useParams } from '@tanstack/react-router'
import useElection from '../../../../hooks/useElection';
import ElectionResults from '../../../../components/election-details-page/ElectionResults';
import CastVoteForm from '../../../../components/election-details-page/CastVoteForm';

export const Route = createFileRoute('/teams/$team_id/elections/$election_id')({
  component: () => {
    const team_id = useParams({
      from: "/teams/$team_id/elections/$election_id",
      select: ({ team_id }) => team_id,
    });
    const election_id = useParams({
      from: "/teams/$team_id/elections/$election_id",
      select: ({ election_id }) => election_id,
    });

    const {
      data: election,
      isLoading,
      isError,
    } = useElection(team_id, election_id);

    if (isLoading) {
      return <p>Loading election...</p>;
    }

    if (isError) {
      return <p>Failed to load election</p>;
    }

    if (!election) {
      return <p>Election not found</p>;
    }

    if (election.has_voted) return <ElectionResults election={election} />;

    return <CastVoteForm election={election} />;
  }
})