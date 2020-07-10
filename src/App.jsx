import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar />
        <SideBar />
        <main className="main">
          <Products />
        </main>
        <footer className="footer">© 2020 Copyright</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
