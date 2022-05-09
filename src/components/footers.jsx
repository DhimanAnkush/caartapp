
import React from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './fontawsome/fontawsome'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-secondary p-4">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-xl-3">
            <h5 className="text-white ">ONLINE SHOPPING</h5>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Home & Living</p>
            <p>Essentials</p>
            <p>Gift Cards</p>
            <p>Myntra Insider</p>
          </div>
          <div className="col-sm-6 col-md-4 col-xl-3">
            <h5 className="text-white ">USEFUL LINKS</h5>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms Of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
          </div>
          <div className="col-sm-6 col-md-4 col-xl-3 ">
            <h5 className="text-white ">KEEP IN TOUCH</h5>
              {/* social media  icons*/}
              <div className="container">
                <div className='row'>
                  <div className='col-3 text-primary'>
                    <FontAwesomeIcon size='2x' icon={['fab', 'facebook']} />
                  </div>
                  <div className='col-3 text-info'>
                  <FontAwesomeIcon size='2x' icon={['fab','twitter']} />
                  </div>
                  <div className='col-3 text-danger'>
                  <FontAwesomeIcon size='2x' icon={['fab','youtube']} />
                  </div>
                  <div className='col-3 text-black'>
                  <FontAwesomeIcon size='2x' icon={['fab','instagram']} />
                  </div>
                </div>

              </div>
          </div>
          <div className=" col-sm-6 col-md-4 col-xl-3 my-2">
            <div className='row'>
              <div className="col-2">
                  <FontAwesomeIcon icon={['fas','retweet']} size='3x' />
              </div>
              <div className='col-10 mx-0'>
                <div><b>Return within 30days</b> <br/>of receiving your order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;