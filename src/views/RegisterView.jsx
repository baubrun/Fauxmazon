import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {registerAction} from "../actions/userActions"

const RegisterView = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const {error, loading, userInfo} = userRegister;
  const { search } = props.location;
  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if(userInfo){
      props.history.push(redirect)
    }
  }, [userInfo]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(registerAction(name, email, password))
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <ul className="form-container">
            <li>
              <h2 className="signIn-header">Register</h2>
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
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(evt) => setName(evt.target.value)}
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                onChange={(evt) => setConfirmPassword(evt.target.value)}
              ></input>
            </li>
            <li>
              <button type="submit" className="button">
                register
              </button>
            </li>
            <li>Already have an account ... <Link to="/signin">Sign In</Link></li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default RegisterView;
