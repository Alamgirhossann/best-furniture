import React from 'react';
import './OfferSection.css';
import second from '../../../images/soafa/soafa (3).jpg'
import first from '../../../images/soafa/soafa (9).jpg'
import { Link } from 'react-router-dom';

const OfferSection = () => {
    return (
        <div className='container-fluid mt-'>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className='section-first-img'>
                        <div className='text-bg'>
                            <div className='text-decoration'>
                                <p>Special Offer Deals</p>
                                <h3>Rest Chair <br />Wooden Collection</h3>
                                <Link to="/" className= 'text-danger fw-bold'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className='section-second-img'>
                        <div className='text-bg'>
                            <div className='text-decoration'>
                                <p>Special Offer Deals</p>
                                <h3>Rest Chair <br />Wooden Collection</h3>
                                <Link to="/" className= 'text-danger fw-bold'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OfferSection;