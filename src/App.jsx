import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar setIsMenuOpen={setIsMenuOpen}/>
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <main className="main">
          <Products />
        </main>
        <footer className="footer">© 2020 Copyright</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
