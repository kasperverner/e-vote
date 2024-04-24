import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useTeams from "../../hooks/useTeams";
import { useAuth } from "@clerk/clerk-react";
import Container from "../../components/layout/Container";
import { Link } from "@tanstack/react-router";
import Button from "../../components/form/button";

const TeamListRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "/",
  component: TeamListPage,
});

function TeamListPage() {
  useAuth();
  const { data } = useTeams();

  if (!data) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4">Teams</h1>
      <ul>
        {data?.map((team) => (
          <li key={team.id} className="bg-white p-4 rounded-lg shadow mb-4 hover:bg-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">{team.name}</h2>
              <p className="text-sm text-gray-500">{team._count.members} members</p>
            </div>
            <Button to={`/Teams/${team.id}`}>See details</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TeamListRoute;