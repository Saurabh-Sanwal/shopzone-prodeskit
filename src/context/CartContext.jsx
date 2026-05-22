import { createContext, useReducer, useContext, useEffect, useState } from "react";

// 1. Create the context
export const CartContext = createContext();

// 2. Reducer function — handles all cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        // Item already in cart — increase quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // New item — add with quantity 1
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "INCREMENT": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case "DECREMENT": {
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }

    case "CLEAR_CART": {
      return [];
    }

    default:
      return state;
  }
}

// 3. Read saved cart from localStorage (survives refresh)
function getInitialCart() {
  try {
    const saved = localStorage.getItem("shopzone_cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// 4. Provider component — wraps the whole app
export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], getInitialCart);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("shopzone_auth") === "true";
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shopzone_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save auth state to localStorage
  useEffect(() => {
    localStorage.setItem("shopzone_auth", isLoggedIn);
  }, [isLoggedIn]);

  // Total number of items (for badge)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        dispatch,
        totalItems,
        totalPrice,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 5. Custom hook — easy to use anywhere
export function useCart() {
  return useContext(CartContext);
}