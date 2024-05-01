import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useTeam from "../../hooks/useTeam";
import useTeamMembers from "../../hooks/useTeamMembers";

import Button from "../../components/form/button";
import Info from "../../components/team-details-page/Info";
import AdminView from "../../components/team-details-page/AdminView";
import useLeaveTeam from "../../hooks/useLeaveTeam";

const TeamDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_id",
  component: TeamDetailsPage,
});

function TeamDetailsPage() {
  const { team_id } = TeamDetailsRoute.useParams();
  const { data: team, isLoading } = useTeam(team_id);
  const { data: memberInfo } = useTeamMembers(team_id);
  const leaveTeam = useLeaveTeam(team_id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!team) {
    return <p>Team not found</p>;
  }

  const admins = memberInfo?.filter((member) => member.isAdmin)?.length ?? 0;

  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-between">
        <div className="flex flex-col space-y-4 w-1/2">
          <Info team={team} />
          {team.isAdmin && (
            <Button
              to={`/teams/${team_id}/admin`}
              className="mt-1 bg-green-500 w-1/2"
            >
              Admin panel
            </Button>
          )}
          <Button
            className="mt-3 bg-orange-500 disabled:bg-gray-400 w-1/2"
            onClick={leaveTeam.mutate}
            disabled={team.isAdmin && admins === 1}
          >
            Leave team
          </Button>
        </div>

        <div className="flex flex-col space-y-4 w-1/2">
          <AdminView
            memberInfo={memberInfo?.filter((member) => {
              return member.isAdmin;
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsRoute;
