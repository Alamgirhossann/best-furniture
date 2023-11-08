import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
  return (
    <>
      {
        //   <div className="card h-100">
        //   <img
        //     style={{ height: "200px" }}
        //     src={product.image}
        //     className="card-img-top"
        //     alt="product_image"
        //   />
        //   <div className="card-body d-flex flex-column">
        //     <h5 className="card-title">{product.description}</h5>
        //     <div className="mt-auto">
        //       <button
        //         onClick={() => addProduct(product)}
        //         className="btn "
        //         style={{ background: "#a9d6e5" }}
        //       >
        //         Add to Cart
        //       </button>
        //       <button
        //         onClick={() => addProduct(product)}
        //         className="btn "
        //         style={{ background: "#a9d6e5" }}
        //       >
        //         Buy
        //       </button>
        //     </div>
        //   </div>
        // </div>
      }

      {
        <div className="col-md-12 px-2">
          <div
            style={{ height: "400px", background: "transparent" }}
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
                <p className="card-text fw-bold">{product.description}</p>
                <h4>Price: ${product.price}</h4>
              </div>
            </Link>
            <div className="">
              <button
                onClick={() => addProduct(product)}
                className="btn "
                style={{
                  background: "#a9d6e5",
                  position: "absolute",
                  bottom: 0,
                  left: 15,
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => addProduct(product)}
                className="btn "
                style={{
                  background: "#a9d6e5",
                  position: "absolute",
                  bottom: 0,
                  right: 15,
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProductCard;
