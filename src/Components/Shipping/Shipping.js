import React, { useState } from 'react';
import Subscribe from '../Home/Subscribe/Subscribe';
import Payment from '../Payment/Payment';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import HeaderWithLogo from '../Shared/HeaderWithLogo/HeaderWithLogo';

const Shipping = () => {
    const [formInfo, setFormInfo] = useState({})
    sessionStorage.setItem('form', JSON.stringify(formInfo))

    const handleChange = e => {
        const newInfo = { ...formInfo }
        newInfo[e.target.name] = e.target.value
        setFormInfo(newInfo)
    }

    return (
        <div>
            <div  className='bg-danger text-white'>
                <HeaderWithLogo></HeaderWithLogo>
                <Header></Header>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <h5>Shipping Information</h5>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input onChange={handleChange} type="text" name='name' class="form-control" id="name" placeholder="Name" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input onChange={handleChange} type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="Email" required />
                            </div>
                            <div class="mb-3">
                                <label for="contry" class="form-label">Contry</label>
                                <input onChange={handleChange} type="text" name='contry' class="form-control" id="contry" placeholder="contry" required />
                            </div>
                            <div class="mb-3">
                                <label for="city" class="form-label">City</label>
                                <input onChange={handleChange} type="text" name='city' class="form-control" id="city" placeholder="City" required />
                            </div>
                            <div class="mb-3">
                                <label for="postalCode" class="form-label">Postal Code</label>
                                <input onChange={handleChange} type="text" name='code' class="form-control" id="postalCode" placeholder="Postal code" required />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                        <h5>Payment with Cradit Card</h5>
                        <Payment></Payment>
                    </div>
                </div>
            </div>
            <hr/>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>

    );
};

export default Shipping;