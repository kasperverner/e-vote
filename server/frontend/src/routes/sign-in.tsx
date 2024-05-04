import { SignIn } from '@clerk/clerk-react';
import { createFileRoute, useSearch } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in')({
  component: () =>  {
    const redirectTo = useSearch({
      from: "/sign-in",
      select: (search) => search.redirectTo,
    });

    return (
      <div className="flex flex-col mt-8">
        <span className="mx-auto">
          <SignIn forceRedirectUrl={redirectTo ?? "/"} />
        </span>
      </div>
    );
  }
})