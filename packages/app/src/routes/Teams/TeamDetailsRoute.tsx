import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";
import useTeam from "../../hooks/useTeam";
import useTeamMembers from "../../hooks/useTeamMembers";
import useInvitations from "../../hooks/useInvitations";

import Button from "../../components/form/button";
import Info from "../../components/team-details-page/Info";
import TabPage from "../../components/team-details-page/TabPage";
import Members from "../../components/team-details-page/Members";
import Invitations from "../../components/team-details-page/Invitations";

const TeamDetailsRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "$team_slug",
  component: TeamDetailsPage,
});

function TeamDetailsPage() {
  const { team_slug } = TeamDetailsRoute.useParams();
  const { data: team } = useTeam(team_slug);
  const { data: memberInfo } = useTeamMembers(team_slug);
  const { data: invitations } = useInvitations(team_slug);

  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-between">
        <div>
          <Info team={team} />
          <Button className="mt-3 bg-orange-500 w-2/3">Leave team</Button>
          {team?.isAdmin && <Button className="mt-2 bg-yellow-500 w-2/3">Rename team</Button>}
          {team?.isAdmin && <Button className="mt-2 bg-red-500 w-2/3">Delete team</Button>}
        </div>

        <div id="target" className="flex flex-col space-y-4 w-2/3">
          <TabPage components={[
            <Members memberInfo={memberInfo} />,
            <Invitations invitations={invitations} />
          ]} names={[
            "Members",
            "Invitations",
          ]} />
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsRoute;