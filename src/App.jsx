import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Layout
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

// CSS
import "./styles/global.css";

// createBrowserRouter — modern way to define all routes
const router = createBrowserRouter([
  {
    // Layout is the parent — it renders Navbar + Outlet + Footer
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",  // Dynamic route — :id is the product ID
        element: <ProductDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // Protected route — wraps /checkout
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    // CartProvider wraps everything — global state available everywhere
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}