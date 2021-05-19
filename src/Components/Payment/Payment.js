import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';
const stripePromise = loadStripe('pk_test_51IFKV2KMTiWAkqg1xBNMjD6WLgVe0jswLzFV3RbKdksftoftd3Mg2WeOsTnYtS9ANET8cNc6dSvKW1g2lHYXDvHd00vl5Y4nyE');

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;