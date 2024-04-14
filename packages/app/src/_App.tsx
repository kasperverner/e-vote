import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import RootRouter from "./routes/RootRouter";
import { ClerkProvider } from "@clerk/clerk-react";

// This is the publishable key thats used to authenticate with Clerk
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={RootRouter} />
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;
