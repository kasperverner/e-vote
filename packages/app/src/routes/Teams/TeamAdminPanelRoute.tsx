import { createRoute, Navigate } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import Button from "../../components/form/button";
import CreateInvitationForm from "../../components/team-admin-page/CreateInvitationForm";
import InvitationsList from "../../components/team-admin-page/InvitationsList";
import ActionsForm from "../../components/team-admin-page/ActionsForm";
import useTeam from "../../hooks/useTeam";
import ElectionsList from "../../components/team-admin-page/ElectionsList";
import MembersList from "../../components/team-admin-page/MembersList";

const TeamAdminPanelRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_id/admin",
  component: TeamAdminPanel,
});

function TeamAdminPanel() {
  const team_id = TeamAdminPanelRoute.useParams().team_id;
  const { data: team, isLoading: isLoadingTeam } = useTeam(team_id);

  if (isLoadingTeam) {
    return <div>Loading...</div>;
  }

  if (!team) {
    return <div>Team not found</div>;
  }

  // if the current user is not an admin, redirect to the team page
  if (team.isAdmin === false) {
    return <Navigate to={`/teams/$team_id`} params={{
      team_id
    }} />;
  }

  return (
    <div className="flex flex-row" style={{ height: "80vh" }}>
      <div className="flex flex-col w-1/2">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-2/5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Members</h2>
          <MembersList />
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
          <ElectionsList />
        </div>
      </div>
    </div>
  );
}

export default TeamAdminPanelRoute;
