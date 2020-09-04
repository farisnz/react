import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import "../style.css";
import Category from "./Category";
import Pdp from "./Pdp";
import Cart from "./Cart";
import User from "./user";

function Header() {
  return ( 
    <>
      <Router>
       <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/1">New Arrival</Link></li>
            <li><Link to="/category/2">Best Seller</Link></li>
            <li style={{float: "right", marginRight: "2rem"}}><Link to="/Cart">Cart</Link></li>
            <li style={{float: "right"}}><Link to="/user">User</Link></li>
          </ul>
          <Switch>
              <Route exact path="/">
                  <Homepage />
              </Route>
              <Route path="/category">
                <Category />
              </Route>
              <Route path="/product">
                <Pdp />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/user">
                <User />
              </Route>
          </Switch>        
        </div>
      </Router>
    </>
  )
}
export default function App () {
  return (
    <>
    <Header />
    </>
  )
}