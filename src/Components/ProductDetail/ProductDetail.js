import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import { url } from "../../utils/URL";

const ProductDetail = ({ addProduct, removeProduct }) => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { cart, showCart } = useContext(ProductContext);
  const [cartItem, setCartItem] = cart;
  const [showCartItem, setShowCartItem] = showCart;

  useEffect(() => {
    fetch(`${url}/products/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const buyProduct = (product) => {
    const exsist = cartItem.find((item) => item.id === product.id);
    if (exsist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exsist, qty: exsist.qty + 1 } : x
        )
      );
      setShowCartItem(true);
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
      setShowCartItem(true);
    }
  };

  return (
    <div style={{ background: "rgb(248, 253, 253)" }}>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <img className="img-fluid h-50" src={item.image} alt="" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="mt-5">
              <h2>{item.description}</h2>
              <p>Product Code: {item.id}</p>
              <h3>Price:${item.price}</h3>
              <div className="">
                <button
                  onClick={() => addProduct(item)}
                  className="btn "
                  style={{
                    background: "#a9d6e5",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => buyProduct(item)}
                  className="btn "
                  style={{
                    background: "#a9d6e5",
                    margin: "10px",
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCartItem && (
        <CartItem addProduct={addProduct} removeProduct={removeProduct} />
      )}
    </div>
  );
};

export default ProductDetail;
