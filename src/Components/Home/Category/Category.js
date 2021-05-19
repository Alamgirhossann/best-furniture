import React, { useEffect, useState } from 'react';
import './Category.css';
import chair from '../../../images/chair/chair.jpg'
import table from '../../../images/table/table (2).jpg'
import bed from '../../../images/bed/bed (2).jpg'
import Slider from "react-slick";
import { HomeWraper } from '../../../index';
import ProductCard from '../ProductCard/ProductCard';

const Category = ({addProduct}) => {
    const [allProduct, setAllProduct] = useState([]);
    const [products, setProducts]=useState([])
    const [activeCategory, setActiveCategory] = useState('chair');

    const category = (categoryName) => {
        const filteredProduct = allProduct.filter(prod => prod.Category === categoryName)
        setProducts([...filteredProduct])
        setActiveCategory(categoryName)

    }
    useEffect(() => {
        fetch('http://localhost:4000/product')
            .then(res => res.json())
            .then(data => {
                const newData = data
                setProducts([...newData])
                setAllProduct([...newData])
            })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        variableWidth: false,
        slidesToScroll: 1,
        prevArrow: <button class="slide-arrow prev-arrow btn-category"></button>,
        nextArrow: <button class="slide-arrow next-arrow btn-category"></button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };

    const productSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        variableWidth: false,
        slidesToScroll: 3,
        prevArrow: <button class="slide-arrow prev-arrow btn-category"></button>,
        nextArrow: <button class="slide-arrow next-arrow btn-category"></button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };
    return (
        <div>
            <div className="category-container mt-5 mb-5">
                <div className="div-container">
                    <div className="container">
                        <h3 className='pt-5 pb-5 text-center text-white fw-bold'>Shop by category</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <HomeWraper>
                                    <Slider {...settings}>
                                        <button className='btn-hover-style' onClick={() =>{ category('chair')}}>
                                            <div>
                                                <img style={{ height: "200px", width: "100%", padding: "15px" }} src={chair} alt="" />
                                                <span className={`${activeCategory === "chair" ? "active" : " "} text-white`}>Chair</span>
                                            </div>
                                        </button>

                                        <button className='btn-hover-style' onClick={() => {category('table')}}>
                                            <div>
                                                <img style={{ height: "200px", width: "100%", padding: "15px" }} src={table} alt="" />
                                                <span className={`${activeCategory === "table" ? "active" : " "} text-white`}>Table</span>
                                            </div>
                                        </button>

                                        <button className='btn-hover-style' onClick={() =>{ category('bed')}}>
                                            <div>
                                                <img style={{ height: "200px", width: "100%", padding: "15px" }} src={bed} alt="" />
                                                <span className={`${activeCategory === "bed" ? "active" : " "} text-white`}>Bed</span>
                                            </div>
                                        </button>
                                    </Slider>
                                </HomeWraper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='mb-5 fw-bold'>Top Products</h3>
            <div className="row">
                <HomeWraper>
                    <Slider {...productSettings}>
                        {
                            products.map(product => <ProductCard product={product} addProduct={addProduct}></ProductCard>)
                            
                        }
                    </Slider>
                </HomeWraper>
            </div>
        </div>
    );
};

export default Category;