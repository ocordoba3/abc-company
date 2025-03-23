import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<></>}>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </Suspense>
  );
}

export default App;
