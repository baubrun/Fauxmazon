import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomeView from "./views/HomeView";
import ProductDetailView from "./views/ProductDetailView";
import NotFound from "./views/NotFound";
import CartView from "./views/CartView";
import SignInView from "./views/SignInView";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <NavBar setIsMenuOpen={setIsMenuOpen} />
        </header>
        <main className="main">
          {/* <Switch> */}
            <div className="content">
              <Route path="/signin" exact={true} component={SignInView} />
              <Route path="/" exact={true} component={HomeView} />
              <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />{" "}
              <Route path="/products" exact={true} component={Products} />
              <Route path="/products/:id" component={ProductDetailView} />
              <Route path="/cart/:id?" component={CartView} />
              {/* <Route component={NotFound} /> */}
            </div>
          {/* </Switch> */}
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
