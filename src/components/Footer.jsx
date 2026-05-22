import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          Shop<span>Zone</span>
        </div>
        <p className="footer-copy">© {year} ShopZone. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </footer>
  );
}