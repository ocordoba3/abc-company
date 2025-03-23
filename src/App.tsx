import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Suspense } from "react";
import ConfirmDialog from "./components/ConfirmDialog";

function App() {
  return (
    <Suspense fallback={<></>}>
      <Sidebar>
        <Outlet />
      </Sidebar>
      {/* Global component to confirm any action */}
      <ConfirmDialog />
    </Suspense>
  );
}

export default App;
