import { useState, useCallback } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiHome,
  FiShoppingBag,
  FiMail,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiX,
  FiPackage,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { totalItems, isLoggedIn, logout } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/");
    closeMenu();
  }, [logout, navigate, closeMenu]);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            Shop<span>Zone</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                <FiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <FiShoppingBag /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FiMail /> Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    padding: "8px 14px",
                    borderRadius: "var(--radius-sm)",
                    fontFamily: "inherit",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--danger)";
                    e.target.style.background = "rgba(239,68,68,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "var(--text-secondary)";
                    e.target.style.background = "none";
                  }}
                >
                  <FiLogOut /> Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink to="/login">
                  <FiLogIn /> Login
                </NavLink>
              </li>
            )}
          </ul>

          {/* Desktop Cart */}
          <NavLink to="/cart" className="nav-cart nav-cart-desktop">
            <FiShoppingCart />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </NavLink>

          {/* Hamburger (mobile) */}
          <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
            {menuOpen ? <FiX /> : <FiMenu />}
            {totalItems > 0 && !menuOpen && (
              <span
                style={{
                  background: "var(--accent)",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: 12,
                  right: 12,
                }}
              >
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          <FiHome /> Home
        </NavLink>
        <NavLink to="/shop" onClick={closeMenu}>
          <FiShoppingBag /> Shop
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          <FiMail /> Contact
        </NavLink>
        <NavLink to="/cart" onClick={closeMenu}>
          <FiShoppingCart /> Cart {totalItems > 0 && `(${totalItems})`}
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/checkout" onClick={closeMenu}>
              <FiPackage /> Checkout
            </NavLink>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--danger)",
                fontSize: "1rem",
                cursor: "pointer",
                padding: "12px 16px",
                borderRadius: "var(--radius-sm)",
                fontFamily: "inherit",
                width: "100%",
              }}
            >
              <FiLogOut /> Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" onClick={closeMenu}>
            <FiLogIn /> Login
          </NavLink>
        )}
      </div>
    </>
  );
}