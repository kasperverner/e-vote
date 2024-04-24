import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useTeams from "../../hooks/useTeams";
import { useAuth } from "@clerk/clerk-react";
import Container from "../../components/layout/Container";
import { Link } from "@tanstack/react-router";

const TeamListRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "/",
  component: TeamListPage,
});

function TeamListPage() {
  useAuth();
  const { data } = useTeams();
  // print all teams
  console.log(data);

  if (!data) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Teams</h1>
      <ul>
        {data?.map((team) => (
            <li key={team.id} className="bg-white p-4 rounded-lg shadow mb-4 hover:bg-slate-200">
              <Link to={`/Teams/${team.id}`} className="text-xl font-bold">
                <Container>
                  <h2 className="text-xl font-bold">{team.name}</h2>
                  <p className="text-sm text-gray-500">Created: {new Date(team.created_at).toLocaleDateString()}</p>
                </Container>
              </Link>
            </li>
        ))}
      </ul>
    </Container>
  );
}

export default TeamListRoute;