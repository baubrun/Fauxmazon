import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetailsAction } from "../actions/productActions";

const SignInView = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);


  return (
      <>
      signin
      </>
  );
};

export default SignInView;
