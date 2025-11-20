import Login from "@/Admin/Auth/Login";
import { Vendors } from "@/Admin/Vendors/Vendors";
import MainDashboard from "@/Admin/Dashboard/MainDashboard";

import AdminLayout from "@/layouts/AdminLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Customers } from "@/Admin/Customers/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        index: true,
        element: <MainDashboard />,
      },
      { path: "vendors-management", element: <Vendors /> },
      { path: "customers-management", element: <Customers /> },
      // future admin sub-routes can be added here, e.g.:
      // { path: "users", element: <UserManagement /> },
    ],
  },
]);

export default router;
