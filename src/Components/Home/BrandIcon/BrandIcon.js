import React from "react";
import "./BrandIcon.css";
import Slider from "react-slick";
import google from "../../../images/icon/google.png";
import airbnb from "../../../images/icon/airbnb.png";
import netflix from "../../../images/icon/netflix.png";
import slack from "../../../images/icon/slack.png";
import ubar from "../../../images/icon/uber.png";
import agency from "../../../images/icon/logo.png";
import { HomeWraper } from "../../..";

const BrandIcon = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    variableWidth: false,
    slidesToScroll: 3,
    prevArrow: <button className="slide-arrow prev-arrow">n</button>,
    nextArrow: <button className="slide-arrow next-arrow">p</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="brand-container">
      <div className="container-fluid mt-5 mb-5">
        <div className="text-center justify-content-center ">
          <HomeWraper>
            <Slider {...settings}>
              <div className=" me-3">
                <img
                  style={{
                    height: "50px",
                    width: "100px",
                    justifyContent: "center",
                  }}
                  src={google}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={airbnb}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={netflix}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={ubar}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={slack}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={agency}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={ubar}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={slack}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className=" me-3">
                <img
                  style={{ height: "50px", width: "100px" }}
                  src={agency}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </Slider>
          </HomeWraper>
        </div>
      </div>
    </div>
  );
};

export default BrandIcon;
