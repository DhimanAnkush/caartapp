
import React from "react";
const Cart = props => {
  const { app } = props;
  let cartItems = app.getCartArr();
  console.log(cartItems);
  return (
    <div>
      <p />
    </div>
  );
};

export default Cart;