import React, { useState, useEffect } from "react";
import Products from "../components/Products/Products";
import axios from "axios";

const HomeView = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default HomeView;
