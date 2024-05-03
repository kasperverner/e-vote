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
  <div className="flex flex-col items-center justify-center h-96">
    <h1 className="text-4xl font-bold mb-4 text-red-500">404 - Not Found</h1>
    <p className="text-lg text-gray-700 mb-4">The page at "{url}" could not be found.</p>
    <a href="/" className="text-blue-500 hover:underline">Go back to homepage</a>
  </div>
  );
}

export default NotFoundRoute;
