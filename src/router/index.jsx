import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";
import AdminLayout from "../layouts/AdminLayout";
import LoginPage from "../pages/common/LoginPage";
import NotFoundPage from "../pages/common/NotFoundPage";
import RegisterPage from "../pages/common/RegisterPage";
import VerifyEmail from "../pages/common/VerifyEmail";
import ProtectedRoute from "../contexts/ProtectedRoute";

const router = createBrowserRouter([
  // Layout Client
  {
    path: "/",
    element: <ClientLayout />,
    children: clientRoutes,
  },
  //Layout Admin
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
  //Layout Empty
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/api/auth/login", element: <LoginPage /> },
  { path: "/api/auth/register", element: <RegisterPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
