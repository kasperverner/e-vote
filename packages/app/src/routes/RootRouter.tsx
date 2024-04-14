import { createRootRoute, createRouter } from "@tanstack/react-router";
import Shell from "../components/layout/Shell";
import IndexRoute from "./HomeRoute";
import OrganizationIndexRoute from "./Organizations/OrganizationIndexRoute";
import NotFoundRoute from "./NotFoundRoute";

// Create the root route and provide the app shell for layout
export const rootRoute = createRootRoute({
  component: Shell,
});

// Add sub-routes to the root route
rootRoute.addChildren([IndexRoute, OrganizationIndexRoute, NotFoundRoute]);

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
