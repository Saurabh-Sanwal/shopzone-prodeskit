import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiStar, FiAlertCircle } from "react-icons/fi";
import "../styles/shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch all products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=100");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Navigate to product detail
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div className="loading-wrap">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-wrap">
        <FiAlertCircle size={40} />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <div className="container">
        <div className="page-header">
          <h1>Our <span className="accent-text">Collection</span></h1>
          <p>Browse through our curated selection of premium products</p>
        </div>

        <div className="shop-toolbar">
          <p className="product-count">
            Showing <span>{products.length}</span> products
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card fade-up"
              style={{ animationDelay: `${Math.min(index * 0.04, 0.8)}s` }}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-img-wrap">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <div className="product-rating">
                    <FiStar />
                    {product.rating}
                    <span>({product.stock})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}