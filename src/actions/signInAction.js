import axios from "axios";
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from "./types";
import Cookie from "js-cookie";

const signInAction = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: SIGN_IN_REQUEST,
      payload: {
        email,
        password,
      },
    });

    axios
      .post("/api/users/signin", {
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: res.data,
        });
        Cookie.set("userInfo", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch({
          type: SIGN_IN_FAIL,
          payload: err.message,
        });
      });
  };
};

export default signInAction;
