/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../../App";
import "./CartItem.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CartItem = ({ addProduct, removeProduct }) => {
  const history = useHistory();
  const { cart, showCart } = useContext(ProductContext);
  const [cartItem] = cart;
  const [showCartItem, setShowCartIrem] = showCart;

  const price = cartItem.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.qty,
    0
  );
  const tax = price * 0.12;
  const shipping = price > 400 ? 0 : 15;
  const totalPrice = price + tax + shipping;

  const closeCart = () => {
    setShowCartIrem(false);
  };

  const checkout = () => {
    setShowCartIrem(false);
    history.push("/shipping");
  };

  return (
    <>
      {showCartItem && (
        <div className="shopping-cart">
          <div className="cart-header">
            <h3>Shopping Cart</h3>
            <button className="btn-close" onClick={closeCart}></button>
          </div>
          {/* Add your cart items and details here */}
          <div className="cart-body">
            <div style={{ background: "rgb(248, 253, 253)" }}>
              {cartItem.length === 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50vh",
                    fontSize: "30px",
                  }}
                >
                  <h5>
                    Opps!!! Your cart is empty. Please add products to your cart
                    <a href="/#product"> here</a>
                  </h5>
                </div>
              )}
              <div className="container-fluid">
                <div className=" py-2">
                  <div className="custom-scrollbar ">
                    {cartItem.map((item) => (
                      <div className=" mb-3">
                        <div className="d-flex ">
                          <div className="">
                            <img
                              className="image-size"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <div className="ms-3">
                            <p className="text-size m-0">{item.description}</p>
                            <div className="d-flex pt-2">
                              <div
                                className="d-flex justify-content-center align-items-center custom-btn"
                                onClick={() => removeProduct(item)}
                              >
                                <AiOutlineMinusCircle />
                              </div>

                              <div className="d-flex justify-content-center align-items-center">
                                <div className="px-2">
                                  ${item.price.toFixed(2)} X {item.qty}
                                </div>
                              </div>

                              <div
                                className="d-flex justify-content-center align-items-center custom-btn"
                                onClick={() => addProduct(item)}
                              >
                                <AiOutlinePlusCircle />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="pt-3">
                      {cartItem.length !== 0 && (
                        <>
                          <p className="m-0">Product Item: {cartItem.length}</p>
                          <p className="m-0">Product Price: ${price}</p>
                          <p className="m-0">Tax: ${tax.toFixed(2)}</p>
                          <p className="m-0">Shipping: ${shipping}</p>
                          <p className="m-0">
                            <strong>Total Price:</strong> $
                            {totalPrice.toFixed(2)}
                          </p>
                          <a onClick={checkout}>
                            <button
                              className="btn"
                              style={{ background: "#a9d6e5" }}
                            >
                              Check Out
                            </button>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more items as needed */}
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
