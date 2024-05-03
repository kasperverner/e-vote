import { useSession } from '@clerk/clerk-react';
import { Navigate, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teams/_layout')({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoaded, isSignedIn } = useSession();

    if (!isLoaded) {
      return "Loading session...";
    }

    if (!isSignedIn) {
      return (
        <Navigate
          to="/sign-in"
          search={{
            redirectTo: document.location.pathname,
          }}
        />
      );
    }

    return <Outlet />;
  }
})