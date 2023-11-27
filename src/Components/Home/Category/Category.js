import React, { useEffect, useState } from "react";
import "./Category.css";
import Slider from "react-slick";
import { HomeWraper } from "../../../index";
import ProductCard from "../ProductCard/ProductCard";
import { url } from "../../../utils/URL";

const Category = ({ addProduct }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const category = (categoryName) => {
    const filteredProduct = allProduct.filter(
      (prod) => prod.Category === categoryName
    );
    setProducts([...filteredProduct]);
    setActiveCategory(categoryName);
  };
  useEffect(() => {
    fetch(`${url}/product`)
      .then((res) => res.json())
      .then((data) => {
        const newData = data;
        setProducts([...newData]);
        setAllProduct([...newData]);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    variableWidth: false,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slide-arrow prev-arrow btn-category"></button>
    ),
    nextArrow: (
      <button className="slide-arrow next-arrow btn-category"></button>
    ),
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

  const productSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    variableWidth: false,
    slidesToScroll: 3,
    prevArrow: (
      <button className="slide-arrow prev-arrow btn-category"></button>
    ),
    nextArrow: (
      <button className="slide-arrow next-arrow btn-category"></button>
    ),
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
        breakpoint: 650,
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
    <div id="product" className="category-container">
      <div className=" mt-5 mb-5">
        <div className="div-container">
          <div className="container">
            <h3 className="pt-5 pb-5 text-center text-dark fw-bold">
              Shop by category
            </h3>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-around">
                  <button
                    className="btn-hover-style text-decoration-underline fs-4"
                    onClick={() => {
                      category("chair");
                    }}
                  >
                    <div>
                      <span
                        className={`${
                          activeCategory === "chair" ? "activeItem" : " "
                        } text-dark`}
                      >
                        Chair
                      </span>
                    </div>
                  </button>

                  <button
                    className="btn-hover-style text-decoration-underline fs-4"
                    onClick={() => {
                      category("table");
                    }}
                  >
                    <div>
                      <span
                        className={`${
                          activeCategory === "table" ? "activeItem" : " "
                        } text-dark`}
                      >
                        Table
                      </span>
                    </div>
                  </button>

                  <button
                    className="btn-hover-style text-decoration-underline fs-4"
                    onClick={() => {
                      category("bed");
                    }}
                  >
                    <div>
                      <span
                        className={`${
                          activeCategory === "bed" ? "activeItem" : " "
                        } text-dark`}
                      >
                        Bed
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {products.length === 0 && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <HomeWraper>
          <Slider {...productSettings}>
            {products.map((product) => (
              <ProductCard
                product={product}
                addProduct={addProduct}
              ></ProductCard>
            ))}
          </Slider>
        </HomeWraper>
      </div>
    </div>
  );
};

export default Category;
