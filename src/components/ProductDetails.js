import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { dispatch } = useCart();
  const [error, setError] = useState(null);


  useEffect(() => {
    const getProduct = async () => {
        try {
          const productData = await fetchProductById(id);
          setProduct(productData);
        } catch (err) {
          setError(err);
        }
      };

      getProduct();
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART',  product });
  };

  if (!product) return <div className="text-center py-3 ">Loading...</div>;
  if (error) return <div className="text-center py-3 " >{error}</div>;

  return (
    <div className="container mt-5">
      <div className="row " >
        <div className="col-md-6 m-auto ">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6 m-auto">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <p>Category: {product.category}</p>
          <button onClick={addToCart} className="btn btn-dark mb-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;