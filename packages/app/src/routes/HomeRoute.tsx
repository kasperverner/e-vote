import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RootRouter";

const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

function HomePage() {
  return (
    <div className="">
      <h3>HomePage</h3>
    </div>
  );
}

export default HomeRoute;
