import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeView from "./views/HomeView"
import ProductView from "./views/ProductView"
import NotFound from "./views/NotFound"


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
    {/* <Switch> */}
      <div className="grid-container">
        <header className="header">
          <NavBar setIsMenuOpen={setIsMenuOpen} />
        </header>
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="main">
          <div className="content">
            <Route path="/products/" exact={true} component={Products} />
            <Route path="/product/:id" exact={true} component={ProductView} />
            <Route path="/" exact={true} component={HomeView} />
            {/* <Route component={NotFound} /> */}

          </div>
        </main>
        <Footer />
      </div>
      {/* </Switch > */}
    </BrowserRouter>
  );
};

export default App;
