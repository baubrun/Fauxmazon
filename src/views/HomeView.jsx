import React, { useState, useEffect } from "react";
import Products from "../components/Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/productActions";

const HomeView = () => {
  const dispatch = useDispatch();
  const productsArray = useSelector((state) => state.products);
  const { error, loading, products } = productsArray;

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <>
      <Products 
      loading={loading} 
      error={error} 
      products={products} />
    </>
  );
};

export default HomeView;
