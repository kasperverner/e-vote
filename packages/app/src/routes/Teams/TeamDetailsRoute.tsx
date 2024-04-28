import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useTeam from "../../hooks/useTeam";
import useTeamMembers from "../../hooks/useTeamMembers";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useAuth } from "@clerk/clerk-react";

import Button from "../../components/form/button";
import Info from "../../components/team-details-page/Info";
import AdminView from "../../components/team-details-page/AdminView";

const TeamDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug",
  component: TeamDetailsPage,
});

function TeamDetailsPage() {
  const { team_slug } = TeamDetailsRoute.useParams();
  const { data: team } = useTeam(team_slug);
  const { data: memberInfo } = useTeamMembers(team_slug);
  const { data: currentUser } = useCurrentUser();
  const { getToken } = useAuth();
  const userIsAdmin = memberInfo?.find((member) => member.user_id === currentUser?.id)?.isAdmin;


  // if anything is loading, return a loading state
  if (!team || !memberInfo || !currentUser) {
    return <div>Loading...</div>;
  }

  async function handleLeaveTeam(user_id, members) {
    const isAdmin = members.some((member) => member.user_id === user_id && member.isAdmin);
    const adminCount = members.filter((member) => member.isAdmin).length;
    const token = await getToken();
  
    if (isAdmin && adminCount === 1) {
      console.log("You are the only admin");
      // Delete the team
      fetch(`http://localhost:4000/teams/${team_slug}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token as string}`,
        },
      })
        .then((data) => {
          console.log(data);
          // redirect to team index
          window.location.href = "/teams";
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error deleting team");
        }
      )
    } else {
      fetch(`http://localhost:4000/teams/${team_slug}/members/leave`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token as string}`,
        },
      })
        .then((data) => {
          console.log(data);
          // redirect to team index
          window.location.href = "/teams";
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error leaving team");
        });
    }
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-between">
        <div className="flex flex-col space-y-4 w-1/2">
          <Info team={team} />
          {userIsAdmin && <Button to={`/Teams/${team_slug}/admin`} className="mt-1 bg-green-500 w-1/2" >Admin panel</Button>}
          <Button className="mt-3 bg-orange-500 w-1/2" onClick={() => {handleLeaveTeam(currentUser?.id, memberInfo)}}>Leave team</Button>
        </div>

        <div className="flex flex-col space-y-4 w-1/2">
          <AdminView memberInfo={memberInfo?.filter((member) => {return member.isAdmin})} />
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsRoute;