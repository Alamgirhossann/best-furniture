/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderWithLogo.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { ProductContext } from "../../../App";
import CartItem from "../../CartItem/CartItem";
import { jwtDecode } from "jwt-decode";
import { firebaseConfig } from "../../Login/firebaseConfig";

const HeaderWithLogo = ({ addProduct, removeProduct }) => {
  const { cart, showCart } = useContext(ProductContext);
  const [cartItem] = cart;
  const [showCartItem, setShowCartItem] = showCart;
  const [token, setToken] = useState(false);

  const openCart = () => {
    setShowCartItem(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const decodedToken = localStorage.getItem("token");
    setToken(decodedToken);
  }, [token]);

  const logout = () => {
    // firebaseConfig.auth().signOut();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fw-bold" to="/">
            Homeify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active me-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3 text-dark" href="/#product">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3 text-dark" href="/#blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3 text-dark" href="/#contact">
                  Contact
                </a>
              </li>
              {!token && (
                <li className="nav-item">
                  <Link className="nav-link me-3 text-dark" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {token && (
                <li className="nav-item dropdown me-3 ">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="userIcon">
                      <AiOutlineUser />
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>

                    <li>
                      <a onClick={logout} className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              )}

              <li className="nav-item">
                <a onClick={openCart} className="nav-link text-dark me-3">
                  <span className="cartIcon">
                    <AiOutlineShoppingCart />
                    <span className="num-position">{cartItem.length}</span>
                  </span>
                </a>
              </li>
            </ul>
            <form onSubmit={onSubmit} className="d-flex">
              <input
                className="form-control me-2"
                style={{ background: "transparent", border: "1px solid black" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn border border-dark text-dark"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showCartItem && (
        <CartItem addProduct={addProduct} removeProduct={removeProduct} />
      )}
    </>
  );
};

export default HeaderWithLogo;
