import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import HeaderWithLogo from '../Shared/HeaderWithLogo/HeaderWithLogo';

const ProductDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`, {
            method: "GET",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setItem(data))
    }, {})


   
    return (
        <div>
            <div style={{ background: "#FF5733", opacity: "0.7", color: "white" }}>
                <HeaderWithLogo></HeaderWithLogo>
                <Header></Header>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="mt-5">
                            <h2>{item.description}</h2>
                            <p>Product Code: {item.id}</p>
                            <h3>Price:{item.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetail;