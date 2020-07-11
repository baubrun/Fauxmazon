import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetailsAction } from "../actions/productActions";

const ProductDetailView = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getProductDetailsAction(props.match.params.id));
  }, []);

  const handleQty = (evt) => {
    setQty(evt.target.value);
  };

  const addToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Link to="/">Back to results</Link>
      </div>

      {loading || !product ? (
        <div>...loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-img">
            <img src={require("../images/" + product.image)} alt="product" />
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
              <li>Price: ${product.price}</li>
              <li>
                Qty:&nbsp;
                {product.inStock <= 0 ? (
                  "Out of Stock"
                ) : (
                  <select onChange={(evt) => handleQty(evt)}>
                    {[...Array(product.inStock).keys()].map((i, idx) => (
                      <option key={idx} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                )}
              </li>

              <li>
                {product.inStock > 0 && (
                  <button onClick={() => addToCart()} className="button">
                    Add to Cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailView;
