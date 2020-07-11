import React from "react";
import { Link } from "react-router-dom";
// import { data } from "../../../data";


const Products = ({products}) => {
  return (
    <ul className="products">
      {products.map((p, idx) => {
        return (
          <li className="product" key={idx}>
            <Link to={`/product/${p._id}`}>
              <img
                className="product-image"
                src={require(`../../images/${p.image}`)}
                alt="watch"
              />
            </Link>
            <div className="product-name">
              <Link to={`/product/${p._id}`}>{p.name}</Link>
            </div>
            <div className="product-brand">{p.brand}</div>
            <div className="product-price">${p.price}</div>
            <div className="product-rating">{`${p.rating} stars ${p.reviews} reviews`}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
