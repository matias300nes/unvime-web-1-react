import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductNewPage from "./pages/products/ProductNewPage";
import ProductViewPage from "./pages/products/ProductViewPage";
import ProductsListPage from "./pages/products/ProductsListPage";
import ProfilePage from "./pages/profile/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsListPage />,
      },
      {
        path: "products/new",
        element: <ProductNewPage />,
      },
      {
        path: "products/:id",
        element: <ProductViewPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
