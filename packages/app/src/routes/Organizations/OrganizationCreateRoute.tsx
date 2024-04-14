import { createRoute } from "@tanstack/react-router";
import OrganizationIndexRoute from "./OrganizationIndexRoute";

const OrganizationCreateRoute = createRoute({
  getParentRoute: () => OrganizationIndexRoute,
  path: "/create",
  component: OrganizationCreatePage,
});

function OrganizationCreatePage() {
  return (
    <div className="">
      <h3>OrganizationListPage</h3>


    </div>
  );
}

export default OrganizationCreateRoute;
