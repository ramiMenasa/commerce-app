import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (cart.length === 0) {
    return (
      <div className="text-center py-3 ">
        <img
          src={require("../assets/emptyCart.png")}
          alt="empty cart "
          className="img-fluid"
        ></img>
        <h2>Empty Cart</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="my-4">Shopping Cart</h1>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-12 mb-4">
            <CartItem
              item={item}
              increaseQuantity={() => increaseQuantity(item.id)}
              decreaseQuantity={() => decreaseQuantity(item.id)}
              removeItem={() => removeItem(item.id)}
            />
          </div>
        ))}
        <div className="col- sticky-md-top  ">
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
