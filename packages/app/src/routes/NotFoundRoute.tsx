import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RootRouter";

const NotFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFoundPage,
});

function NotFoundPage() {
  const url = document.location.pathname;

  return (
    <div className="">
      <h3>404 - NotFoundPage: {url}</h3>
    </div>
  );
}

export default NotFoundRoute;
