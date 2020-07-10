import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="brand">
        <button onClick={() => setIsMenuOpen(true)}>
          <i className="fas fa-bars fa-1x"></i>
        </button>
        <Link to="/">Fauxmazon</Link>
      </div>
      <div className="header-links">
        <Link to="/cart">Cart </Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
};

export default NavBar;
