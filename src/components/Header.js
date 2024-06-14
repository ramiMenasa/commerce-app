import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand " to="/">
          Momentum
        </Link>
        <Link className="nav-link" to="/cart">
          Cart <sup>{cartCount}</sup>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
