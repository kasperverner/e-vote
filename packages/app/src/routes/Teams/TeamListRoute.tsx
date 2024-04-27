import { Link, createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useTeams from "../../hooks/useTeams";
import Button from "../../components/form/button";

const TeamListRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "/",
  component: TeamListPage,
});

function TeamListPage() {
  const { data } = useTeams();

  if (!data) {
    return <p>Loading...</p>;
  }

  if (data.length === 0) {
    return (
      <>
        <h1 className="text-3xl font-bold mb-4">Teams</h1>
        <p>You are not a member of any teams.</p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold my-6">Teams</h1>
      <ul>
        {data?.map((team) => (
          <li
            key={team.id}
            className="bg-white p-4 rounded-lg shadow mb-4 hover:bg-slate-200 flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{team.name}</h2>
              <p className="text-sm text-gray-500">
                {team._count.members} members
              </p>
            </div>
            <Button to={`/Teams/${team.id}`}>See details</Button>
          </li>
        ))}
      </ul>
      <Link to="/teams/create" className="mt-4 text-blue-500 hover:underline">
        Create a new team
      </Link>
    </>
  );
}

export default TeamListRoute;
