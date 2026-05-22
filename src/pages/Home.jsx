import { Link } from "react-router-dom";
import { FiShoppingBag, FiArrowRight, FiStar, FiPackage, FiTruck } from "react-icons/fi";
import "../styles/home.css";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-tag">New Collection 2025</div>
          <h1>
            Shop Smarter,<br />
            Live <span className="accent-text">Better</span>
          </h1>
          <p>
            Discover thousands of premium products across all categories.
            Fast delivery, easy returns, zero hassle.
          </p>
          <div className="home-cta">
            <Link to="/shop" className="btn btn-primary">
              <FiShoppingBag /> Browse Shop
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">200+</span>
              <span className="stat-label">Products Available</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4.8</span>
              <span className="stat-label">
                <FiStar style={{ display: "inline", marginRight: 4 }} />
                Average Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20
          }}>
            {[
              { icon: <FiTruck />, title: "Free Delivery", desc: "On all orders above $50" },
              { icon: <FiPackage />, title: "Easy Returns", desc: "30-day return policy" },
              { icon: <FiStar />, title: "Top Quality", desc: "Curated premium products" },
            ].map((feature) => (
              <div key={feature.title} style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "28px 24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start"
              }}>
                <div style={{
                  width: 44, height: 44,
                  background: "var(--accent-glow)",
                  border: "1px solid var(--accent)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent)", fontSize: "1.2rem", flexShrink: 0
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h4 style={{ marginBottom: 4, fontSize: "1rem" }}>{feature.title}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}