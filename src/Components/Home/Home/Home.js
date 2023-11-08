import React from "react";
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

const Home = ({ addProduct }) => {
  return (
    <div style={{ background: "rgb(248, 253, 253)" }}>
      <TopBanner></TopBanner>
      <Category addProduct={addProduct}></Category>
      <FurnitureSection></FurnitureSection>
      <Blog></Blog>
      <ContactForm />
      <hr />
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
