import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamCreateRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "/create",
  component: TeamCreatePage,
});

function TeamCreatePage() {
  return (
    <div className="">
      <h3>TeamListPage</h3>


    </div>
  );
}

export default TeamCreateRoute;
