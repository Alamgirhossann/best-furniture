import React from "react";
import Slider from "react-slick";
import table from "../../../images/soafa/soafa (12).jpg";
import soafa from "../../../images/soafa/soafa (14).jpg";
import bed from "../../../images/soafa/soafa (6).jpg";
import chair from "../../../images/soafa/soafa (11).jpg";
import { HomeWraper } from "../../..";
import { Link } from "react-router-dom";

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div id="blog">
      <div className="container-fluid mt-5 mb-5">
        <h3 className="mb-4 fw-bold text-center">From The Blog</h3>
        <div className="row">
          <HomeWraper>
            <Slider {...settings}>
              <div>
                <div className="card me-3">
                  <img
                    style={{ height: "300px" }}
                    src={chair}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur quia incidunt asperiores.
                    </p>
                    <Link className="btn" style={{ background: "#a9d6e5" }}>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3">
                  <img
                    style={{ height: "300px" }}
                    src={table}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Lorem adipisicing elit facilis
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur quia incidunt asperiores.
                    </p>
                    <Link className="btn" style={{ background: "#a9d6e5" }}>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3">
                  <img
                    style={{ height: "300px" }}
                    src={soafa}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Eveniet atque dolorem ducimus
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur quia incidunt asperiores.
                    </p>
                    <Link className="btn" style={{ background: "#a9d6e5" }}>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3">
                  <img
                    style={{ height: "300px" }}
                    src={bed}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      Amet consectetur adipisicing elit
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur quia incidunt asperiores.
                    </p>
                    <Link className="btn" style={{ background: "#a9d6e5" }}>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </HomeWraper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
