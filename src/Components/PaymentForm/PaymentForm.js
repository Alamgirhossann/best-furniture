import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../App';
import master from '../../images/icon/master.png';
import visa from '../../images/icon/visa.png';


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    // data get from session storage
    const cartItem = JSON.parse(localStorage.getItem('cartItem'));
    const shippingInfo = JSON.parse(sessionStorage.getItem('form'));
    const { loggedInUser} = useContext(ProductContext)

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            shipping: shippingInfo,
            cartItem: cartItem,
            paymentId,
            orderTime: new Date()
        };
        
        fetch('http://localhost:4000/paymentInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                    alert('your order placed successfully');
                }
            })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePaymentSuccess(paymentMethod.id)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='border p-3 mt-4'>
                    <div className="row">
                        <div className="col-md-8">
                            <p className='text-secondary'>Safe money transfer useing your bank account. Visa, Maestro, Discover, American Express.</p>
                        </div>
                        <div className="col-md-4 d-flex">
                            <img className=" d-none d-md-block" style={{ width: "40px",height:"40px" }} src={master} alt="" />
                            <img className=" d-none d-md-block" style={{ width: "40px",height:"40px" }} src={visa} alt="" />
                        </div>
                    </div>

                    <CardElement />
                    {
                        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                    }
                </div>

                <button disabled={!stripe} className="btn btn-danger float-end mt-4" type='submit'>
                    Continue to pay
            </button>
            </form>

            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }
        </div>
    );
};

export default PaymentForm;