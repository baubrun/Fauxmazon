import React from "react";
import { Link } from "react-router-dom";


const Products = ({products, loading, error,}) => {
  return loading ? (
    <div>...loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((p, idx) => {
        return (
          <li className="product" key={idx}>
            <Link to={`/products/${p._id}`}>
              <img
                className="product-image"
                src={require(`../../images/${p.image}`)}
                alt="watch"
              />
            </Link>
            <div className="product-name">
              <Link to={`/products/${p._id}`}>{p.name}</Link>
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
