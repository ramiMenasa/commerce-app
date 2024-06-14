import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "../api";
import ProductCard from "./ProductCard";



function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("defualt");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const getProductsByCategory = async () => {
        try {
          const data = await fetchProductsByCategory(selectedCategory);
          setFilteredProducts(data);
        } catch (err) {
          console.error("Error fetching products by category:", err);
        }
      };

      getProductsByCategory();
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const sortProductsByPrice = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sorted);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    sortProductsByPrice(order);
  };

  if (loading) return <p className="text-center py-3 ">Loading...</p>;
  if (error) return <p className="text-center py-3" >Error: {error.message}</p>;

  return (
    <>
      <div className="container mt-5">
      <h1>Products List</h1>

        <div className="row sticky-top m-3  " style={{top:55}}>
          <select
            className="col form-select "
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="col form-select "
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="defualt">sort by price </option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-4 ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
