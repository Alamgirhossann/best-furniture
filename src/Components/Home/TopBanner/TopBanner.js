import React from 'react';
import './TopBanner.css';
import first from '../../../images/soafa/soafa (3).jpg'
import second from '../../../images/soafa/soafa (9).jpg'


const TopBanner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img style={{ height: "500px", width: "100%" }} src={first} class="d-block" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Furniture Collections</h5>
                        <p>Up to 20% Cashback </p>
                        <small>amazing deals. Greate 500+ brands. Real saving.</small>
                        <div className='mt-5'>
                            <button className='btn btn-danger'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img style={{ height: "500px", width: "100%" }} src={second} class="d-block" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Furniture Collections</h5>
                        <p>Up to 20% Cashback </p>
                        <small>amazing deals. Greate 500+ brands. Real saving.</small>
                        <div className='mt-5'>
                            <button className='btn btn-danger'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default TopBanner;