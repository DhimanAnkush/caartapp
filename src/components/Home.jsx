
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner my-2">
          <div className="carousel-item active">
            <Link to="/products">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/1/556fc79c-cf1c-4afc-986f-0e4d53b640bb1593625915265-dk.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/products">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/1/e59ff67d-9921-4cc5-9bea-1f984dab66161593625915393-Levis_Desk.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/products">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/1/b4c58e7e-d5f1-441d-9537-efd1ed6d70e91593625915006-dk--1-.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#products"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#products"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* ************************ Discount carousel *********************** */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner my-2">
          <div className="carousel-item active">
            <Link to="/products">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/1/8c7d9291-2bb1-48df-9eee-e6b3126c47e51593625914469-Perfume.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/products">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/1/3d263c47-b023-4063-b8b7-953701cf8e951593625914430-Flat150.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/products">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/2/2bff2805-2a35-4d06-9d37-4b03021e72cd1593696789178-upto60--1-.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#products"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#products"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;