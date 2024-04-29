import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./RootRouter";
import { SignIn } from "@clerk/clerk-react";

const SigninRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sign-in",
  component: SigninPage,
});

function SigninPage() {
  const search = SigninRoute.useSearch<{ redirectTo: string | undefined }>();

  return (
    <div className="flex flex-col mt-8">
      <span className="mx-auto">
        <SignIn redirectUrl={search.redirectTo ?? "/"} />
      </span>
    </div>
  );
}

export default SigninRoute;
