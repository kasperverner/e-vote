import { createRootRoute, Navigate, Outlet, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import { useSession } from "@clerk/clerk-react";
import BreadCrumbs from "@/components/layout/BreadCrumbs";

export const Route = createRootRoute({
  loader: async () => {

  },
  component: () => {
    const { isLoaded, isSignedIn } = useSession();

    if (!isLoaded) return <p>"Loading session..."</p>;

    const path = document.location.pathname;

    if (path.includes("/teams") && !isSignedIn)
      return (
        <Navigate
          to="/sign-in"
          search={{
            redirectTo: document.location.pathname,
          }}
        />
      );

    return (
      <div className="bg-neutral-50 min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <Container>
            <section className="py-4">
              <BreadCrumbs />
              {/* The Outlet is where the router will place the page content */}
              <Outlet />
            </section>
          </Container>
          <TanStackRouterDevtools />
        </div>
        <Footer />
      </div>
    );
  },
  notFoundComponent: () => {
    const path = document.location.pathname;

    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h1 className="text-4xl font-bold mb-4 text-red-500">
          404 - Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The page at "{path}" could not be found.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to homepage
        </a>
      </div>
    );
  }
});
