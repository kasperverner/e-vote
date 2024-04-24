import { createRoute } from "@tanstack/react-router";
import TeamIndexRoute from "./TeamIndexRoute";

const TeamListRoute = createRoute({
  getParentRoute: () => TeamIndexRoute,
  path: "/",
  component: TeamListPage,
});

function TeamListPage() {
  return (
    <div className="">
      <h3>TeamListPage</h3>


    </div>
  );
}

export default TeamListRoute;
