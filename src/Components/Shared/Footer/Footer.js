import React from "react";
import "./Footer.css";
import facebook from "../../../images/icon/bxl-facebook.png";
import youtube from "../../../images/icon/bxl-youtube.png";
import twitter from "../../../images/icon/bxl-twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text-container">
        <div className="container-fluid text-white pt-5 pb-2">
          <div className="row">
            <div className="col-md-5 text-dark">
              <h5 className="mb-5">Contact Information</h5>
              <p className="contact-info">Call us 24/7 Free</p>
              <h1>0123 4567 890</h1>
              <p>60,29th Street, San Francisco</p>
              <div className="d-flex">
                <img className="me-5" src={facebook} alt="" />
                <img className="me-5" src={youtube} alt="" />
                <img className="me-5 text-white" src={twitter} alt="" />
              </div>
            </div>
            <div className="col-md-2 text-dark">
              <h5 className="my-4">Imformation</h5>
              <p>About</p>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="col-md-2 text-dark">
              <h5 className="mb-4">Customer Service</h5>
              <p>Specials</p>
              <p>Return</p>
              <p>Site Map</p>
              <p>Brands</p>
              <p>Gift Certificates</p>
            </div>
            <div className="col-md-2 text-dark">
              <h5 className="mb-4">My Account</h5>
              <p>My Account</p>
              <p>Order History</p>
              <p>Wish List</p>
              <p>Affiliates</p>
              <p>Newsletter</p>
            </div>
          </div>
          <hr />
          <p className="text-center pt-4 text-dark">
            Copy right by Best Furniture &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
