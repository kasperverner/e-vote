import { Link } from "@tanstack/react-router";
import useElections from "../../hooks/useElections";

const Elections = ({ team_id }) => {
  const { data: elections, isLoading, isError } = useElections(team_id);

  if (isLoading) {
    return <p>Loading elections...</p>;
  }

  if (isError) {
    return <p>An error occurred loading elections!</p>;
  }

  if (!elections || elections.length === 0) {
    return <p>No elections as of yet!</p>;
  }


  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex">
      <div className="w-full space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Elections</h1>

        <div className="flex justify-between gap-4 py-2 rounded-lg">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-lg w-full sm:w-1/4 p-2">Previous</button>
          <button className="bg-blue-500 hover:bg-blue-600 rounded-lg w-full sm:w-1/4 p-2">Current</button>
          <button className="bg-blue-500 hover:bg-blue-600 rounded-lg w-full sm:w-1/4 p-2">Future</button>
        </div>

        <div className="flex-col text-gray-800 space-y-4">
          {elections.map(election => (
            <div key={election.id} className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 flex items-center justify-between">
              <div>
                <h1 className="text-2xl">{election.name}</h1>
                <p className="text-ml text-gray-600"></p>
                <p className="text-ml text-gray-600">
                  {new Date(election.start_at).toLocaleString("en-GB",
                    { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }
                  )}
                </p>
                <p>{election.description}</p>
              </div>
              <Link to={`/teams/${team_id}/elections/${election.id}`} className="bg-blue-500 hover:bg-blue-600 rounded-lg p-2">
                View Election
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Elections;
