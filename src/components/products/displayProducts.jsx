
import React from "react";
import { Link } from "react-router-dom";
const DisplayProducts = props => {
  const { app } = props;
  const match = props.match;
  // console.log(match);
  const productItem = props.productItem;
  const item = productItem.map(item => (
    <div key={item.id} className="col-sm-6 col-md-6 col-lg-4 my-2">
      <div className="card" style={{ width: "18rem" }}>
        {/* <div className="card-img-top m-5 w-75"> */}
        <img src={item.img} alt="" style={{ height: 250, width: "100%" }} />
        {/* </div> */}
        <div className="card-body">
          <div className="card-title">
            <h5 className="text-truncate ">{item.name}</h5>
            <p>&#8377;{item.price}</p>
          </div>
          <div className="text-center mb-2">
            <Link to={`${match.url}/${item.id}`}>
              <button
                className="btn btn-block btn-primary"
                onClick={() => handleClick(item.id)}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
  const handleClick = id => {
    // console.log(id)
    let cartItem = productItem.find(item => item.id === id);
    console.log(cartItem);
    app.addToCart(cartItem);
  };
  // console.log(productItem);
  return (
    <div>
      <h2 className="text-info font-weight-bold text-uppercase h2">
        {" "}
        <u>{props.title}</u>
      </h2>
      <div className="container">
        <div className="row">{item}</div>
      </div>
    </div>
  );
};
export default DisplayProducts;