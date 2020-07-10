import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
        <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h3>Categories</h3>
            <button onClick={() => setIsMenuOpen(false)}>
              <i className="far fa-window-close"></i>
            </button>
          </div>

          <ul>
            <li>
              <Link to="#">Pants</Link>
            </li>
            <li>
              <Link to="#">Games</Link>
            </li>
          </ul>
        </aside>
    </>
  );
};

export default Categories;
