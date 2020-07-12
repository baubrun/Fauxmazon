import axios from "axios";
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./types";
import Cookie from "js-cookie";

export const signInAction = (email, password) => {
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


export const registerAction = (name, email, password) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
      payload: {
        email,
        password,
      },
    });

    axios
      .post("/api/users/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        Cookie.set("userInfo", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.message,
        });
      });
  };
};