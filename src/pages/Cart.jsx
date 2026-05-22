import { useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/pages.css";

export default function Cart() {
  const { cartItems, dispatch, totalItems, totalPrice, isLoggedIn } = useCart();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Your <span className="accent-text">Cart</span></h1>
        </div>
        <div className="empty-state">
          <FiShoppingCart size={64} color="var(--text-muted)" />
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet</p>
          <button className="btn btn-primary" onClick={() => navigate("/shop")}>
            <FiShoppingBag /> Browse Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-header">
          <h1>Your <span className="accent-text">Cart</span></h1>
          <p>{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
        </div>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {/* Image */}
                <div className="cart-item-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>

                {/* Info */}
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                    {item.quantity > 1 && (
                      <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginLeft: 6 }}>
                        (${item.price} × {item.quantity})
                      </span>
                    )}
                  </p>
                </div>

                {/* Controls */}
                <div className="cart-item-controls">
                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => handleDecrement(item.id)}
                    >
                      <FiMinus />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                    title="Remove item"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span style={{ color: "var(--success)" }}>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax (8%)</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>${(totalPrice * 1.08).toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout <FiArrowRight />
            </button>
            <button className="continue-btn" onClick={() => navigate("/shop")}>
              Continue Shopping
            </button>

            {!isLoggedIn && (
              <p style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                textAlign: "center",
                marginTop: 12
              }}>
                You'll be asked to login to checkout
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}