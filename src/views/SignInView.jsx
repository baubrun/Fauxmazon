import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import signInAction from "../actions/signInAction"

const SignInView = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignIn = useSelector((state) => state.userSignIn);
  const {error, loading, userInfo} = userSignIn;
  const { search } = props.location;
  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if(userInfo){
      props.history.push(redirect)
    }
  }, [userInfo]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signInAction(email, password))
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <ul className="form-container">
            <li>
              <h2 className="signIn-header">Sign In</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(evt) => setPassword(evt.target.value)}
              ></input>
            </li>
            <li>
              <button type="submit" className="button">
                Sign in
              </button>
            </li>
            <li>New to Fauxmazon?</li>
            <li>
              <Link
                className="button signIn"
                to={
                  redirect === "/"
                    ? "register"
                    : "register?redirect=" + redirect
                }
              >
                Create a an account
              </Link>
            </li>
          </ul>
        </form>{" "}
      </div>
    </>
  );
};

export default SignInView;
