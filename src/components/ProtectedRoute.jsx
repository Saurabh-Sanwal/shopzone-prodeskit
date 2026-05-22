import { Navigate, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

// This component guards routes that need login
// If not logged in → redirect to /login
// If logged in → render the child route (Outlet)

export default function ProtectedRoute() {
  const { isLoggedIn } = useCart();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}