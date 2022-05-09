
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Products from "../components/products/products";
import DisplayProducts from "../components/products/displayProducts";
import NotFound from "../components/notFound";
import Login from "../components/loginpage/login";
import Cart from "../components/cart/cart";
import data from "../components/data/data.json";

const Routess = props => {
  let { app } = props;
  return (
    <div>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" render={props => <Login {...props} app={app} />} />
        <Route path="/about" component={About} />
        <Route path="/cart" render={props => <Cart {...props} app={app} />} />
        <Route path="/products" exact component={Products} />
        <Route
          path="/products/laptops"
          // exact
          render={props => (
            <DisplayProducts
              {...props}
              app={app}
              productItem={data.laptops}
              title="laptops"
            />
          )}
        />
        <Route
          path="/products/trimmers"
          render={props => (
            <DisplayProducts
              {...props}
              app={app}
              productItem={data.trimmers}
              title="trimmers"
            />
          )}
        />
        <Route
          path="/products/headphones"
          render={props => (
            <DisplayProducts
              {...props}
              app={app}
              productItem={data.headphones}
              title="headphones"
            />
          )}
        />
        <Route
          path="/products/memorycards"
          render={props => (
            <DisplayProducts
              {...props}
              app={app}
              productItem={data.pendrives}
              title="pendrives"
            />
          )}
        />
        <Route component={NotFound} />
      </Routes>
    </div>
  );
};
export default Routess;