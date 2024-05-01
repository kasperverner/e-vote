import { useParams } from "@tanstack/react-router";
import useElections from "../../hooks/useElections";
import Button from "../form/button";
import useDeleteElection from "../../hooks/useDeleteElection";

const ElectionsList = () => {
  const team_id = useParams({
    from: "/teams/$team_id/admin",
    select: ({ team_id }) => team_id,
  });

  const { data: elections, isLoading, isError } = useElections(team_id);
  const deleteElection = useDeleteElection(team_id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading elections</p>;
  }

  if (!elections || elections.length === 0) {
    return <p>No elections was found</p>;
  }

  return (
    <ul className="flex flex-col space-y-4">
      {elections?.map((election) => (
        <li
          key={election.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md relative flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-bold">{election.name}</h3>
            <p>{election.description}</p>
          </div>
          <Button
            onClick={() => deleteElection.mutate(election.id)}
            className="bg-red-500 disabled:bg-red-800"
            disabled={deleteElection.isPaused}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ElectionsList;