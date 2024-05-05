import useResult from "@/hooks/useResult";
import { Election } from "../../types/Election"
import useElectionValidation from "@/hooks/useElectionValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons/faSquare";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons/faSquareMinus";
import { ElectionValidation } from "@/types/ElectionValidation";
import ResultChat from "./ResultChart";


const ValidationTitle = ({
  electionValidation
}: {
  electionValidation: ElectionValidation | undefined;
}) => {
  if (!electionValidation) {
    return (
      <p className="text-sm mb-4">
        <FontAwesomeIcon icon={faSquare} className="text-neutral-300 mr-2" />
        Validation pending
      </p>
    );
  }

  if (!electionValidation.is_ballots_valid || !electionValidation.is_propositions_valid || !electionValidation.is_votes_valid)
    return (
      <p className="text-sm mb-4">
        <FontAwesomeIcon icon={faSquareMinus} className="text-red-300 mr-2" />
        Validation failed
      </p>
    );

  return (
    <p className="text-sm mb-4">
      <FontAwesomeIcon icon={faSquareCheck} className="text-green-300 mr-2" />
      Validation passed
    </p>
  );
}

const CreatedLabel = ({ election }: { election: Election }) => (
  <p className="text-xs flex">
    <span className="w-16 font-semibold">Created</span>
    {new Date(election.created_at).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}
  </p>
);

const StartedLabel = ({ election }: { election: Election }) => (
  <p className="text-xs flex">
    <span className="w-16 font-semibold">
      {new Date() < new Date(election.start_at) ? "Starting" : "Started"}
    </span>
    {new Date(election.start_at).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}
  </p>
);

const EndedLabel = ({ election }: { election: Election }) => (
  <p className="text-xs flex">
    <span className="w-16 font-semibold">
      {new Date() < new Date(election.end_at) ? "Ending" : "Ended"}
    </span>
    {new Date(election.end_at).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}
  </p>
);

const ElectionResults = ({ election }: { election: Election }) => {
  const { data: result, isLoading: isLoadingResult, isError: isErrorResult } = useResult(
    election.team_id,
    election.id
  );

  const { data: validation, isLoading: isLoadingValidation, isError: isErrorValidation } = useElectionValidation(
    election.team_id,
    election.id
  );

  if (isLoadingResult) return <p>Loading election results...</p>;

  if (isErrorResult) return <p>Failed to load election results</p>;

  if (isLoadingValidation) return <p>Loading election validation...</p>;

  if (isErrorValidation) return <p>Failed to load election validation</p>;

  if (new Date() < new Date(election.start_at))
    return <p>Election has not started yet</p>;

  return (
    <>
      <h1 className="text-3xl font-bold">Election results</h1>
      <ValidationTitle electionValidation={validation} />
      <CreatedLabel election={election} />
      <StartedLabel election={election} />
      <EndedLabel election={election} />
      <ResultChat election={election} result={result} />
    </>
  );
}

export default ElectionResults
