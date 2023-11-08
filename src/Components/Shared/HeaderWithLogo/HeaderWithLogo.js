/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HeaderWithLogo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../../App";

const HeaderWithLogo = () => {
  const { cart } = useContext(ProductContext);
  const [cartItem] = cart;

  const onSubmit = (e) => {
    e.preventDefault();
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
                  className="nav-link active me-4"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4 text-dark" href="/#product">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4 text-dark" href="/#blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4 text-dark" href="/#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown me-4 ">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="userIcon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/cart">
                  <span className="cartIcon">
                    <FontAwesomeIcon icon={faCartPlus} />
                    <span className="num-position">{cartItem.length}</span>
                  </span>
                </Link>
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
    </>
  );
};

export default HeaderWithLogo;
