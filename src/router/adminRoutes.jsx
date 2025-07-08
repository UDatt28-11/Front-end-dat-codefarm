import CategoryFormPage from "../pages/admin/CategoryFormPage";
import CategoryListPage from "../pages/admin/CategoryListPage";
import DashBoardPage from "../pages/admin/DashBoardPage";
import ProductForm from "../pages/admin/ProductForm";
import ProductListPage from "../pages/admin/ProductListPage";
import SettingsPage from "../pages/admin/SettingsPage";
import UserListPage from "../pages/admin/UserListPage";
import OrderDetailPage from "../pages/client/OrderDetailPage";
import OrderListPage from "../pages/client/OrderListPage";
import ProfilePage from "../pages/client/ProfilePage";
import BlogFormPage from "./../pages/admin/BlogFormPage";
import BlogListPage from "./../pages/admin/BlogListPage";

export const adminRoutes = [
  // * Common Routes
  { index: true, element: <DashBoardPage /> },
  { path: "settings", element: <SettingsPage /> },
  { path: "me/profile", element: <ProfilePage /> },

  // * Product and Category Routes
  { path: "products", element: <ProductListPage /> },
  { path: "products/add", element: <ProductForm /> },
  { path: "products/edit/:id", element: <ProductForm /> },
  { path: "categories", element: <CategoryListPage /> },
  { path: "categories/add", element: <CategoryFormPage /> },
  { path: "categories/update/:id", element: <CategoryFormPage /> },

  { path: "orders", element: <OrderListPage /> },
  { path: "orders/:id", element: <OrderDetailPage /> },

  // * Blog Routes
  { path: "blogs", element: <BlogListPage /> },
  { path: "blogs/edit/:id", element: <BlogFormPage /> },
  { path: "blogs/add", element: <BlogFormPage /> },

  // * User Routes
  { path: "users", element: <UserListPage /> },
];
export default adminRoutes;
