import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from "../actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { loading: true };
    case SIGN_IN_SUCCESS:
      return { 
        loading: false, 
        userInfo: action.payload };
    case SIGN_IN_FAIL:
      return { 
        loading: false, 
        error: action.payload };
    default:
      return state;
  }
};
export default userReducer;
