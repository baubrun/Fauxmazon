import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../actions/types";




const cartReducer = (
  state = {
    cartItems: []
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const currentItem = action.payload;
      const itemInCart = state.cartItems.find(
        i => i.product === currentItem.product);
      if (itemInCart) {
        return {
          cartItems: state.cartItems.map(
            i => i.product === itemInCart.product ?
            currentItem :
            i)
        };
      }
      return {
        cartItems: [...state.cartItems, currentItem]
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          i => i.product !== action.payload)
      }
      default:
        return state;
  }
};
export default cartReducer;