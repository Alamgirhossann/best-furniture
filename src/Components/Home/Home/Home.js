import React, { useContext } from "react";
import Blog from "../Blog/Blog";
import BrandIcon from "../BrandIcon/BrandIcon";
import Category from "../Category/Category";
import Footer from "../../Shared/Footer/Footer";
import FurnitureSection from "../FurnitureSection/FurnitureSection";
import Header from "../../Shared/Header/Header";
import HeaderWithLogo from "../../Shared/HeaderWithLogo/HeaderWithLogo";
import OfferSection from "../OfferSection/OfferSection";
import Subscribe from "../Subscribe/Subscribe";
import TopBanner from "../TopBanner/TopBanner";
import ContactForm from "../ContactUs/ContactUs";
import "../../../App.css";
import CartItem from "../../CartItem/CartItem";
import { ProductContext } from "../../../App";
const Home = ({ addProduct }) => {
  const { showCart } = useContext(ProductContext);
  const [showCartItem] = showCart;
  return (
    <div style={{ background: "rgb(248, 253, 253)" }}>
      <TopBanner></TopBanner>
      <div className="home-margin">
        <Category addProduct={addProduct}></Category>
        <FurnitureSection></FurnitureSection>
        <Blog></Blog>
        <ContactForm />
        <hr />
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
