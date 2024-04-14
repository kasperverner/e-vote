import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ClerkProvider>
);

export default Providers;
