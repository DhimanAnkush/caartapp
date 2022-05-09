
import React from "react";
import { Link } from "react-router-dom";
const Products = props => {
  // console.log(props);
  const { match } = props;
  return (
    <div>
      <h2 className="text-left h2 m-2">#Shop Top Categories</h2>
      <hr />
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <Link to={`${match.url}/laptops`}>
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                    alt="best selling Laptop"
                  />
                  <div className="card-body">
                    <h5>Best Selling laptops</h5>
                    <p className="text-success my-0">Up to 40% Off</p>
                    <p className="text-black-50 my-0">
                      Hp, Scer, Dell, Asus & More
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to={`${match.url}/trimmers`}>
                <div className="card">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                  />
                  <div className="card-body">
                    <h5>Trimmers & Hair Clippers</h5>
                    <p className="text-success my-0">From &#8377;399</p>
                    <p className="text-black-50 my-0">
                      By Nova, Philips & more
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6">
              <Link to={`${match.url}/headphones`}>
                <div className="card">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                  />
                  <div className="card-body">
                    <h5>Bluetooth headphones</h5>
                    <p className="text-success my-0">From &#8377;1,999</p>
                    <p className="text-black-50 my-0">
                      Noise, Boult Audio & more
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to={`${match.url}/memorycards`}>
                <div className="card">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1589447388175-ac47d31be950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                  />
                  <div className="card-body">
                    <h5 className="text-truncate">
                      Pendrives & Memory Cards & Hair Clippers
                    </h5>
                    <p className="text-success my-0">From &#8377;399</p>
                    <p className="text-black-50 my-0">
                      By Nova, Philips & more{" "}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;