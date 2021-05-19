import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import Subscribe from '../Home/Subscribe/Subscribe';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import HeaderWithLogo from '../Shared/HeaderWithLogo/HeaderWithLogo';


const CartItem = ({ addProduct, removeProduct }) => {
    const {cart} = useContext(ProductContext);
    const [cartItem] =cart;
    const price = cartItem.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.qty, 0)
    const tax = price * 0.12;
    const shipping = price > 400 ? 0 : 15;
    const totalPrice = price + tax + shipping;

    return (
        <div>
            <div className='bg-danger text-white'>
                <HeaderWithLogo></HeaderWithLogo>
                <Header></Header>
            </div>
            {cartItem.length === 0 &&
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "80vh", fontSize: "30px" }}>
                    <h5>Opps!!! Your cart is empty. Please add products to your cart<Link to='/home'> here</Link></h5>
                </div>}
            <div className="container-fluid">
                <div className='d-flex'>
                    <div className='col'>
                        {cartItem.map(item => (
                            <div className="row mb-3">
                                <div className="col-md-5">
                                    <img style={{ height: "250px", width: "200px" }} src={item.image} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <div className="mt-4">
                                        <h6>{item.description}</h6>
                                        <div className="d-flex">
                                            <button className='me-2 btn btn-danger' onClick={() => removeProduct(item)}>-</button>
                                            <span>{item.price.toFixed(2)} X {item.qty}</span>
                                            <button className='ms-2 btn btn-danger' onClick={() => addProduct(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="col">
                            {cartItem.length !== 0 && (
                                <>
                                    <h5>Product Item: {cartItem.length}</h5>
                                    <h5>Product Price: ${price}</h5>
                                    <h5>Tax: ${tax.toFixed(2)}</h5>
                                    <h5>Shipping: ${shipping}</h5>
                                    <h5><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</h5>
                                    <Link to='/shipping'>
                                        <button className='btn btn-danger'>Check Out</button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default CartItem;