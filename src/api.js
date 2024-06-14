
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 10000, 
});

export const fetchProducts = async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
    try {
      const response = await api.get(`/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  };
export default api;
