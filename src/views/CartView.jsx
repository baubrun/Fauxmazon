import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCartAction, removeFromCartAction} from "../actions/cartActions";
import { Link } from "react-router-dom";

const CartView = (props) => {
  const { id } = props.match.params;
  const { search } = props.location;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const qty = search ? Number(search.split("=")[1]) : 1;

  console.log('id :>> ', id);

  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty));
    }
  }, []);

  const handleCheckout = () => {
      props.history.push(`/signin?redirect=shipping`)
  };

  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id))
  };

  return (
    <>
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>price</div>
            </li>
            {cartItems.length === 0 ? (
              <div>Empty Cart</div>
            ) : (
              cartItems.map((item, idx) => (
                <li key={idx}>
                  <div className="cart-img">
                    <img
                      src={require(`../images/${item.image}`)}
                      alt="product"
                    />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(evt) =>
                          dispatch(
                            addToCartAction(item.product, evt.target.value)
                          )
                        }
                      >
                        {[...Array(item.inStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        className="button"
                        onClick={() => removeFromCart(item.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-price">${item.price}</div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-action">
          <h3>
            Subtotal ({cartItems.reduce((acc, val) => acc + parseInt(val.qty), 0)} items)
            : $ {cartItems.reduce((acc, val) => acc + val.price * parseInt(val.qty), 0)}
          </h3>
          <button
            className="button"
            disabled={cartItems.length === 0}
            onClick={() => handleCheckout()}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartView;
