import React from "react";
import { Link } from "react-router-dom";

const l = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Products = () => {
  return (
    <div className="content">
      <ul className="products" >
        {l.map((i, idx) => {
          return (
            <li className="product" key={idx}>
              <img
                className="product-image"
                src={require("../../images/watch-omega.jpg")}
                alt="watch"
              />
              <div className="product-name">
                <Link to="/product">Watch</Link>
              </div>
              <div className="product-brand">Omega</div>
              <div className="product-price">$300</div>
              <div className="product-rating">4.5 Starts (10 reviews)</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
