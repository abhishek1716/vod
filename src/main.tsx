import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DashboardScreen from "./pages/dashboardScreen.tsx";
import LoginScreen from "./pages/loginScreen.tsx";
import ProjectScreen from "./pages/projectScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/project",
    element: <ProjectScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
