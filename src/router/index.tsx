import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";
import App from "../App";

const ClientsView = lazy(() => import("../pages/ClientsView"));
const ClientDetailView = lazy(() => import("../pages/ClientDetailView"));

const router = createBrowserRouter([
  {
    path: PATHS.clients,
    element: <App />,
    children: [
      {
        path: PATHS.clients,
        element: <ClientsView />,
      },
      {
        path: PATHS.clientById(":id"),
        element: <ClientDetailView />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={PATHS.clients} />,
  },
]);

export default router;
