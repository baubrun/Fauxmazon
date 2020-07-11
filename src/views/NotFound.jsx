import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <Link to="/"><i className="fas fa-house-user"></i></Link>
      <div className="notFound">
        <h1>404</h1>
        <h6>Page not found</h6>
      </div>
    </>
  );
};

export default NotFound;
