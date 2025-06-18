import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import clientRoutes from "./clientRoutes";
import ProtectedRoute from "../components/ProtectedRoute";
import adminRoutes from "./adminRoutes";
import AdminLayout from "../layouts/AdminLayout";
import LoginPage from "../pages/common/LoginPage";
import NotFoundPage from "../pages/common/NotFoundPage";
import RegisterPage from "../pages/common/RegisterPage";

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
    element: <AdminLayout />,
    children: adminRoutes,
    // [
    //   {
    //     path: "",
    //     element: <AdminLayout />,
    //     children: adminRoutes,
    //   },
    // ],
  },
  //Layout Empty
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
