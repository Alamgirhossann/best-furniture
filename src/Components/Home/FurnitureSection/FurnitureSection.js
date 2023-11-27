import React from "react";
import { Link } from "react-router-dom";
import "./FurnitureSection.css";

const FurnitureSection = () => {
  return (
    <div className=" furniture-sec">
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="section-first-image">
            <div className="text-bcg">
              <div className="text-align">
                <p>Special Festival Deals</p>
                <h3>
                  Bed Room <br />
                  Furniture 20% Sale
                </h3>
                <Link
                  to="/"
                  className="btn"
                  style={{ background: "#a9d6e5", color: "black" }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section-second-image">
            <div className="text-bcg">
              <div className="text-align">
                <p>Special Festival Deals</p>
                <h3>
                  Bed Room <br />
                  Furniture 20% Sale
                </h3>
                <Link
                  to="/"
                  className="btn"
                  style={{ background: "#a9d6e5", color: "black" }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureSection;
