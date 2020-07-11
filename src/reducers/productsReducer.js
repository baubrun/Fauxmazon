import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCTS_REQUEST,
    PRODUCTS_REQUEST_SUCCESS,
    PRODUCTS_REQUEST_FAIL
} from "../actions/types";

const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case PRODUCTS_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCTS_REQUEST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};

export {productsReducer, productDetailsReducer};
