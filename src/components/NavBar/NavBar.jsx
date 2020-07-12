import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const NavBar = ({ setIsMenuOpen }) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const {userInfo} = userSignIn
  return (
    <>
      <div className="brand">
        <button onClick={() => setIsMenuOpen(true)}>
          <i className="fas fa-bars fa-1x"></i>
        </button>
        <Link to="/">Fauxmazon</Link>
      </div>
      <ul className="header-links">
        <li>
          <Link to="/cart">Cart </Link>
        </li>
        <li>
          {userInfo ? (
            <Link to="/profile">{userInfo.name}</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default NavBar;
