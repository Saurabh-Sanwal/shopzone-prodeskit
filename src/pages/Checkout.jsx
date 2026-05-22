import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiLock, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/pages.css";

export default function Checkout() {
  const { cartItems, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  // useRef for form fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const cardRef = useRef(null);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Clear cart after order
    dispatch({ type: "CLEAR_CART" });
    setOrderPlaced(true);
  };

  // Empty cart redirect
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="container">
        <div className="empty-state" style={{ paddingTop: 60 }}>
          <FiShoppingBag size={64} color="var(--text-muted)" />
          <h3>Your cart is empty</h3>
          <p>Add some products before checking out</p>
          <button className="btn btn-primary" onClick={() => navigate("/shop")}>
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  // Order Success
  if (orderPlaced) {
    return (
      <div className="container">
        <div className="order-success">
          <div className="order-success-icon">
            <FiCheckCircle />
          </div>
          <h2>Order Placed!</h2>
          <p>
            Thank you for your purchase. Your order is being processed and will
            be delivered soon.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/shop")}
          >
            <FiShoppingBag /> Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="page-header">
          <h1>
            <span className="accent-text">Secure</span> Checkout
          </h1>
          <p>Complete your order below</p>
        </div>

        <div className="checkout-grid">
          {/* Checkout Form */}
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <h3>Shipping Details</h3>

            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  ref={firstNameRef}
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  ref={lastNameRef}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                ref={emailRef}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Street Address *</label>
              <input
                type="text"
                ref={addressRef}
                placeholder="123 Main Street"
                required
              />
            </div>

            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                ref={cityRef}
                placeholder="Mumbai"
                required
              />
            </div>

            <h3 style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
              Payment Info
            </h3>

            <div className="form-group">
              <label>Card Number *</label>
              <input
                type="text"
                ref={cardRef}
                placeholder="4242 4242 4242 4242"
                maxLength={19}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="123" maxLength={3} />
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              <FiCheckCircle /> Place Order — ${(totalPrice * 1.08).toFixed(2)}
            </button>

            <div className="secure-badge">
              <FiLock /> Secured with 256-bit SSL encryption
            </div>
          </form>

          {/* Order Summary */}
          <div className="checkout-summary">
            <h3>Order Summary</h3>

            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <span className="checkout-item-name">
                  {item.title} × {item.quantity}
                </span>
                <span className="checkout-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="summary-row" style={{ marginTop: 16 }}>
              <span>Subtotal</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}