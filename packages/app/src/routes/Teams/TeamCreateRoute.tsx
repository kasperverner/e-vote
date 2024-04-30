import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@clerk/clerk-react";
import Button from "../../components/form/button";

const TeamCreateRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "/create",
  component: TeamCreatePage,
});

function TeamCreatePage() {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  async function createTeam(teamName: string) {
    if (!teamName) {
      alert("Please enter a team name");
      return;
    }
    console.log("teamName", teamName);

    const token = await getToken();
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teams`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token as string}`,
      },
      body: JSON.stringify({
          name: teamName,
      })
  });

  console.log(response.body)
  console.log(response.status)

  if (response.status != 201) {
    alert("An error has occured");
    return;
  }

  const { id } = await response.json();

  console.log(id)

  if (id)
    navigate({
      to: "/teams/$team_id",
      params: {
        team_id: id
      }
    })
  }

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Create team</h1>
      <div className="flex">
        <input type="text" id="teamName" className="border border-gray-300 rounded-md px-2 py-1"placeholder="Enter Team Name"/>
        <Button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {createTeam(document.getElementById("teamName")?.value as string)}}>Create  Team</Button>
      </div>

    </div>
  );
}

export default TeamCreateRoute;
