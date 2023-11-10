import React from "react";
import "./TopBanner.css";
import first from "../../../images/soafa/so.jpg";
import second from "../../../images/soafa/soafa (14).jpg";

const TopBanner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            style={{ height: "500px", width: "100%" }}
            src={first}
            className="d-block"
            alt="..."
          />
          <div className="carousel-caption text-dark">
            <h5>Furniture Collections</h5>
            <p>Up to 20% Cashback </p>
            <small>amazing deals. Greate 500+ brands. Real saving.</small>
            <div className="mt-5">
              <button className="btn" style={{ background: "#a9d6e5" }}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            style={{ height: "500px", width: "100%" }}
            src={second}
            className="d-block"
            alt="..."
          />
          <div className="carousel-caption text-dark">
            <h5>Furniture Collections</h5>
            <p>Up to 20% Cashback </p>
            <small>amazing deals. Greate 500+ brands. Real saving.</small>
            <div className="mt-5">
              <button className="btn" style={{ background: "#a9d6e5" }}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TopBanner;
