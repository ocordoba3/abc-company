import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";

const ClientsView = lazy(() => import("@/pages/ClientsView"));
const ClientDetailView = lazy(() => import("@/pages/ClientDetailView"));

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.clients} element={<ClientsView />} />
      <Route path={PATHS.clientById(":id")} element={<ClientDetailView />} />
      <Route path="*" element={<Navigate to={PATHS.clients} />} />
    </Routes>
  );
};

export default Router;
