import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import { useAuth } from "@clerk/clerk-react";
import useElections from "../../hooks/useElections";
import useTeamMembers from "../../hooks/useTeamMembers";
import useCurrentUser from "../../hooks/useCurrentUser";

import Button from "../../components/form/button";
import CreateInvitationForm from "../../components/team-admin-page/CreateInvitationForm";
import InvitationsList from "../../components/team-admin-page/InvitationsList";
import ActionsForm from "../../components/team-admin-page/ActionsForm";

const TeamAdminPanelRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_id/admin",
  component: TeamAdminPanel,
});

function TeamAdminPanel() {
  const team_id = TeamAdminPanelRoute.useParams().team_id;
  const { getToken } = useAuth();
  const { data: elections } = useElections(team_id);
  const { data: members } = useTeamMembers(team_id);
  const { data: currentUser } = useCurrentUser();

  // if something is loading, return a loading state
  if (!elections || !members || !currentUser) {
    return <div>Loading...</div>;
  }

  async function handleChangeUser(user_id: string, isAdmin: boolean) {
    // fetch put on /teams/:teamId/members/:memberId, add isAdmin: true
    const token = await getToken();
    fetch(`http://localhost:4000/teams/${team_id}/members/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token as string}`,
      },
      body: JSON.stringify({
        isAdmin: isAdmin,
      }),
    })
      .then((data) => {
        console.log(data);
        // reload page
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error promoting user to admin");
      });
  }

  async function handleRemoveUser(user_id: string) {
    // fetch delete request to remove user from team (DELETE on /teams/:teamId/members/:memberId)
    const token = await getToken();
    fetch(`http://localhost:4000/teams/${team_id}/members/${user_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    })
      .then((data) => {
        console.log(data);
        // reload page
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error removing user from team");
      });
  }

  async function deleteElection(election_id: string) {
    // fetch delete request to delete election (DELETE on /teams/:teamId/elections/:electionId)
    const token = await getToken();
    fetch(`http://localhost:4000/teams/${team_id}/elections/${election_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    })
      .then((data) => {
        console.log(data);
        // reload page
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error deleting election");
      });
  }

  return (
    <div className="flex flex-row" style={{ height: "80vh" }}>
      <div className="flex flex-col w-1/2">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Members</h2>
          <ul className="flex flex-col space-y-4">
            {members.map((member) => (
              <li
                key={member.email}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p>{member.email}</p>
                  </div>
                  {member.isAdmin && (
                    <span className="text-sm text-green-600 font-semibold ml-4">
                      Admin
                    </span>
                  )}
                </div>
                {currentUser.user.email !== member.email && (
                  <div className="flex space-x-2">
                    {!member.isAdmin ? (
                      <Button
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleChangeUser(member.id, true)}
                      >
                        Promote
                      </Button>
                    ) : (
                      <Button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleChangeUser(member.id, false)}
                      >
                        Demote
                      </Button>
                    )}
                    <Button
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleRemoveUser(member.id)}
                    >
                      Kick
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Invites</h2>
          <CreateInvitationForm />
          <InvitationsList />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md h-1/5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Actions</h2>
          <ActionsForm />
        </div>
      </div>
      
      <div className="flex flex-col w-1/2">
        <div className="bg-white p-4 rounded-lg shadow-md h-full ml-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Elections</h2>
          <div className="flex justify-between items-center mb-4">
            <Button
              to={`/teams/${team_id}/elections/new`}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Add Election
            </Button>
          </div>
          <ul className="flex flex-col space-y-4">
            {elections.map((election) => (
              <li
                key={election.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md relative flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold">{election.name}</h3>
                  <p>{election.description}</p>
                </div>
                <Button
                  onClick={() => deleteElection(election.id)}
                  className="bg-red-500"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamAdminPanelRoute;
