import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        let founded = false;
        const updatedCart = state.map(item => {
          if (item.id === action.product.id) {
            founded = true;
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
          if (!founded) {
          updatedCart.push({ ...action.product, quantity: 1 });
        }
  
        return updatedCart;
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
