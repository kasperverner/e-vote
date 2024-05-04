/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, createFileRoute, useParams } from "@tanstack/react-router";
import useTeam from "@/hooks/useTeam";
import useTeamMembers from "@/hooks/useTeamMembers";
import useLeaveTeam from "@/hooks/useLeaveTeam";
import Info from "@/components/team-details-page/Info";
import Button from "@/components/form/button";
import AdminView from "@/components/team-details-page/AdminView";
import Elections from "@/components/team-details-page/Elections";

export const Route = createFileRoute("/teams/$team_id/")({
  component: () => {
    const team_id = useParams({
      from: "/teams/$team_id/",
      select: ({ team_id }) => team_id,
    });
    const { data: team, isLoading } = useTeam(team_id);
    const { data: memberInfo } = useTeamMembers(team_id);
    const leaveTeam = useLeaveTeam(team_id);

    if (isLoading)
      return <p>Loading...</p>;

    // if the current user is not a member of the team, redirect to the teams page
    if (!team)
      return <Navigate to="/teams" />;

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
              memberInfo={
                memberInfo?.filter((member) => {
                  return member.isAdmin;
                }) ?? []
              }
            />
          </div>
        </div>
        <Elections team_id={team_id} />
      </div>
    );
  },
});
