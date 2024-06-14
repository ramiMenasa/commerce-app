import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART',product });
  };

  return (
    <div className="card mb-4"  style={{height:500 }}>
      <img src={product.image} className="card-img-top"  style={{height:300 }} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title" >{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-dark me-2 mb-2">View Details</Link>
        <button  onClick={() => addToCart(product)} className="btn btn-success ml-2 mb-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
