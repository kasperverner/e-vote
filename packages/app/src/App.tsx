import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import RootRouter from "./routes/RootRouter";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RootRouter} />
    </QueryClientProvider>
  );
};

export default App;
