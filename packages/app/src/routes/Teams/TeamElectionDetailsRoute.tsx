import { createRoute, useNavigate } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useElection from "../../hooks/useElection";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/clerk-react";
import useResults from "../../hooks/useResults";

const TeamElectionDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug/elections/$election_slug",
  component: TeamElectionDetailsPage,
});

function TeamElectionDetailsPage() {
  const { team_slug, election_slug } = TeamElectionDetailsRoute.useParams();
  const currentDate = new Date();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const { data: results } = useResults(team_slug, election_slug);
  const { data: election } = useElection(team_slug, election_slug);

  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    data = {
      proposition_id: data.vote,
    };

    const token = await getToken();
    fetch(`http://localhost:4000/teams/${team_slug}/elections/${election_slug}/vote`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token as string}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        if (data.status !== 200) {
          navigate({
            to: "/teams/$team_slug",
            params: { team_slug },
          });
          alert("Error voting");
        }
        navigate({
          to: "/teams/$team_slug",
          params: { team_slug },
        });
        alert("Vote submitted");  
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error voting");
      });
  }

  if (!election || !results) {
    return <div>Loading...</div>;
  }

  const startAt = new Date(election.start_at);
  const endAt = new Date(election.end_at);
  const hasVoted = election.has_voted as boolean;

  if (currentDate < startAt) {
    return <div>The election has not started yet.</div>;
  } else if (currentDate > endAt) {
    // Calculate the winner
    let winner = "";
    let maxVotes = 0;

    election.propositions.forEach((proposition) => {
      if (results[proposition.id] > maxVotes) {
        maxVotes = results[proposition.id];
        winner = proposition.id;
      }
    });
    
    return (
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-2">{election.name}</h2>
        <p className="text-gray-700 mb-4">{election.description}</p>
        <h3 className="text-lg font-bold mb-2">Results</h3>
        <ul className="list-disc pl-4 mb-4">
          {election.propositions.map((proposition) => (
            <li key={proposition.id} className="mb-2">
              {proposition.name} - {proposition.description} - {results[proposition.id]} votes
              {/* {winner === proposition.name && <span className="text-green-500 font-bold ml-2"> - Winner</span>} */}

              {winner === proposition.id && <span className="text-green-500 font-bold ml-2"> - Winner</span>}
            </li>
          ))}
        </ul>
      </div>
    );
    
  } else if (hasVoted) {
    return <div>You have already voted. Come back later to see results.</div>;
  } else {
    return (
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">{election.name}</h2>
        <p className="text-gray-700 mb-4">{election.description}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="vote" className="block text-gray-700 font-bold mb-2">
              Your Vote:
            </label>
            <select {...register("vote")} id="vote" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {election.propositions.map((proposition) => (
                <option key={proposition.id} value={proposition.id}>
                  {proposition.name} - {proposition.description}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit Vote
          </button>
        </form>
      </div>
    );
  }
}

export default TeamElectionDetailsRoute;