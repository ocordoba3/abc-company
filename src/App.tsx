import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Sidebar from "./components/Sidebar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Sidebar>
          <Router />
        </Sidebar>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
