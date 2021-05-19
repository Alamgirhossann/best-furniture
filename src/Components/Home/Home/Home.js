import React from 'react';
import Blog from '../Blog/Blog';
import BrandIcon from '../BrandIcon/BrandIcon';
import Category from '../Category/Category';
import Footer from '../../Shared/Footer/Footer';
import FurnitureSection from '../FurnitureSection/FurnitureSection';
import Header from '../../Shared/Header/Header';
import HeaderWithLogo from '../../Shared/HeaderWithLogo/HeaderWithLogo';
import OfferSection from '../OfferSection/OfferSection';
import Subscribe from '../Subscribe/Subscribe';
import TopBanner from '../TopBanner/TopBanner';

const Home = ({addProduct}) => {
    return (
        <div>
            <div className='bg-danger text-white'>
                <HeaderWithLogo></HeaderWithLogo>
                <Header></Header>
            </div>
            <TopBanner></TopBanner>
            <OfferSection></OfferSection>
            <Category addProduct={addProduct}></Category>
            <FurnitureSection></FurnitureSection>
            <Blog></Blog>
            <BrandIcon></BrandIcon>
            <hr />
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;