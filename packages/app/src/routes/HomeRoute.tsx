import { Link, createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RootRouter";

const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col gap-4  mt-8">
      <h3 className="font-bold">Example links:</h3>
      <Link
        to="/teams/$team_slug"
        params={{
          team_slug: "87654321",
        }}
        className="hover:underline"
      >
        Team
      </Link>
      <Link to="/not-found-page" className="hover:underline">
        404 Page
      </Link>
    </div>
  );
}

export default HomeRoute;
