import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout wraps every page
// Navbar stays fixed at top
// Outlet = the current page content
// Footer stays at bottom

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}