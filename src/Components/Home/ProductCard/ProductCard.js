import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
  return (
    <>
      <div className="col-md-12 px-2">
        <div
          style={{ height: "320px", background: "transparent" }}
          className="card"
        >
          <Link
            to={`/productDetail/${product.id}`}
            className="text-dark text-decoration-none"
          >
            <img
              style={{ height: "180px" }}
              src={product.image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
