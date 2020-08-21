import "./style.css";
import React, { useState, Component, useEffect} from "react";
import Homepage from "./components/Homepage";
import Cart from './components/Cart';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Header(){
  return (
    <>
      <Router>
      <div>
        <ul className="ul">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/category/111">New Arrival</Link></li>
          <li> <Link to="/category/222">Best Seller</Link></li>
          <li> <Link to="/cart">Cart</Link> </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/category/111">
            <CategoryPage />
          </Route>
          <Route path="/category/222">
            <CategoryPage />
          </Route>
          <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/category/:categoryId">
              <CategoryPage />
            </Route>
            <Route path="/product">
              <ProductPage/>
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}
export default function App() {
  return (
    <>
    <Header />
    </>
  );
}


