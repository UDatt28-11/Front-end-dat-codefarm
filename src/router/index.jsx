import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ClientLayout from "../layouts/ClientLayout";
import NotFoundPage from "../pages/NotFoundPage";
import AdminLayout from "../layouts/AdminLayout";
import DashBoardPage from "../pages/admin/DashBoardPage";

import BlogPage from "../pages/admin/BlogPage";
import OrderPage from "../pages/admin/OrderPage";
import UserPage from "../pages/admin/UserPage";
import { SettingPage } from "../pages/admin/SettingPage";
import ProductForm from "../pages/admin/ProductForm";
import ProductHooksForm from "../pages/admin/ProductHooksForm";
import ProductListPage from "../pages/admin/ProductListPage";
import ProductPage from "../pages/admin/ProductPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/profile/me/:id", element: <ProfilePage /> },
    ],
  },
  // * Layout Admin
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          { index: true, element: <DashBoardPage /> },
          { path: "product", element: <ProductListPage /> },
          { path: "products", element: <ProductPage /> },
          { path: "products/add", element: <ProductForm /> },
          { path: "products/hooks", element: <ProductHooksForm /> },
          { path: "blogs", element: <BlogPage /> },
          { path: "orders", element: <OrderPage /> },
          { path: "users", element: <UserPage /> },
          { path: "settings", element: <SettingPage /> },
        ],
      },
    ],
  },

  // * Layout Empty
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
