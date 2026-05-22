import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiShoppingCart,
  FiCheck,
  FiStar,
  FiAlertCircle,
  FiTag,
  FiPackage,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/pages.css";

export default function ProductDetail() {
  const { id } = useParams(); // Get :id from the URL
  const navigate = useNavigate();
  const { dispatch, cartItems } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  // Check if already in cart
  const isInCart = cartItems.some((item) => item.id === Number(id));

  // Fetch single product using the ID from URL
  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]); // Re-fetch if ID changes

  // Add to cart action
  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    setAdded(true);
    // Reset button after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="loading-wrap">
        <div className="spinner"></div>
        <p>Loading product...</p>
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
    <div className="product-detail-page">
      <div className="container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back to Shop
        </button>

        <div className="detail-grid fade-up">
          {/* Product Image */}
          <div className="detail-img-wrap">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          {/* Product Info */}
          <div className="detail-info">
            <span className="detail-category">{product.category}</span>

            <h1 className="detail-title">{product.title}</h1>

            <div className="detail-rating">
              <FiStar />
              <strong>{product.rating}</strong>
              <span className="rating-count">/ 5 rating</span>
              <span className="rating-count">• {product.stock} in stock</span>
            </div>

            <div className="detail-price">
              ${product.price}
              {product.discountPercentage && (
                <span className="discount">
                  {product.discountPercentage.toFixed(1)}% OFF
                </span>
              )}
            </div>

            <p className="detail-desc">{product.description}</p>

            <div className="detail-meta">
              <div className="meta-row">
                <span className="meta-label">
                  <FiTag style={{ marginRight: 4 }} />Brand
                </span>
                <span className="meta-value">{product.brand || "N/A"}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">
                  <FiPackage style={{ marginRight: 4 }} />SKU
                </span>
                <span className="meta-value">{product.sku || `SKU-${product.id}`}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className={`add-to-cart-btn ${added || isInCart ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added || isInCart ? (
                <>
                  <FiCheck /> {isInCart ? "In Cart" : "Added!"}
                </>
              ) : (
                <>
                  <FiShoppingCart /> Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}