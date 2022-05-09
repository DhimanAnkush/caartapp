import React from "react";
import "./components/css/styles.css";
import ShoppingApp from "./components/shoppingApp";
export default function App() {
  let bgimage = {
    backgroundImage: `url("./images/bgimg.png")`
  };
  return (
    <div className="App" style={bgimage}>
      {/* <img src="/images/bgimg.png" alt="" /> */}
      <ShoppingApp />
    </div>
  );
}


