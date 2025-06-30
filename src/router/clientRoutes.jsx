import AboutPage from "../pages/client/AboutPage";
import BlogDetailPage from "../pages/client/BlogDetailPage";
import BlogListPage from "../pages/client/BlogListPage";
// import CategoriesPage from "../pages/client/CategoriesPage";
import ContactPage from "../pages/client/ContactPage";
import FAQPage from "../pages/client/FAQPage";
import HomePage from "../pages/client/HomePage";
import OrderDetailPage from "../pages/client/OrderDetailPage";
import OrderListPage from "../pages/client/OrderListPage";
import ProductDetailPage from "../pages/client/ProductDetailPage";
import ProductsPage from "../pages/client/ProductsPage";
import ProfilePage from "../pages/client/ProfilePage";
import TermsPrivacyPage from "../pages/client/TermsPrivacyPage";
import WishListPage from "../pages/client/WishListPage";
import CartPage from "./../pages/client/CartPage";

export const clientRoutes = [
  // * Common Routes
  { index: true, element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/fag", element: <FAQPage /> },
  { path: "/terms-privacy", element: <TermsPrivacyPage /> },

  // * Product and Category Routes
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:id", element: <ProductDetailPage /> },
  // { path: "/categories", element: <CategoriesPage /> },

  // * Blog Routes
  { path: "/blogs", element: <BlogListPage /> },
  { path: "/blogs/:slug", element: <BlogDetailPage /> },

  // * Cart Router
  { path: "/cart", element: <CartPage /> },

  // * User Routes
  { path: "/profile/me/:id", element: <ProfilePage /> },
  { path: "/profile/orders", element: <OrderListPage /> },
  { path: "/profile/orders/:id", element: <OrderDetailPage /> },
  { path: "/profile/wishlist", element: <WishListPage /> },
];
export default clientRoutes;
