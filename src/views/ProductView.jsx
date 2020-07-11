import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const Products = (props) => {
  const id = props.match.params.id;
  const product = data.products.find((d) => d._id === id);
  return (
    <>
      <div style={{padding: "1rem"}}>
        <Link to="/">Back to results</Link>
      </div>

      <div className="details">
        <div className="details-img">
          <img src={require(`../images/${product.image}`)} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>{`${product.rating} Stars (${product.reviews}) reviews`}</li>
            <li>Price: ${product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              Price: ${product.price}
            </li>
            <li>
              Qty: <select name="" id="">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
