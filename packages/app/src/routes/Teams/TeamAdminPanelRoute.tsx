import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamAdminPanelRoute= createRoute({
    getParentRoute: () => TeamIndexRoute,
    path: "$team_slug/admin",
    component: TeamAdminPanel,
  });

function TeamAdminPanel () {
    return (
        <div>
            <h1>Admin Panel</h1>
        </div>
    );
}

export default TeamAdminPanelRoute;