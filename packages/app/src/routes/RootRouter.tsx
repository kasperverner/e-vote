import { createRootRoute, createRouter } from "@tanstack/react-router";
import Shell from "../components/layout/Shell";
import IndexRoute from "./HomeRoute";
import TeamIndexRoute from "./Teams/TeamIndexRoute";
import NotFoundRoute from "./NotFoundRoute";

// Create the root route and provide the app shell for layout
export const rootRoute = createRootRoute({
  component: Shell,
});

// Add sub-routes to the root route
rootRoute.addChildren([IndexRoute, TeamIndexRoute, NotFoundRoute]);

// Create the router
const router = createRouter({
  routeTree: rootRoute,
});

// Extend the Register interface to include the router to ensure typesafety throughout the app
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Export the router
export default router;
