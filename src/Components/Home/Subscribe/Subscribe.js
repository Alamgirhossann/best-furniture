import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Subscribe = () => {
    const [subscriber, setSubscriber] = useState(null);

    const handleBlur = (e) => {
        const newSubscriber = { ...subscriber }
        newSubscriber[e.target.name] = e.target.value
        setSubscriber(newSubscriber)
    }
    const handleSubscribe = (e) => {
        // const emailRegex =new RegExp (/^\S+@\S+\.\S+$/)
        if (subscriber) {
            fetch("http://localhost:4000/subscribe", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(subscriber)
            }).then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Your subscription is successfull')
                    }
                })
        } else {
            alert("Please Enter Your Valid Email")
        }

        e.preventDefault();
    }
    return (
        <div className='container mt-4 mb-4'>
            <div className="row">
                <div className="col-md-6 fs-3">
                    <p className='fw-bold text-secondary'><FontAwesomeIcon icon={faVolumeUp} /> Subscribe For Get Newsletter</p>
                </div>
                <div className="col-md-6">
                    <form class="d-flex" onSubmit={handleSubscribe}>
                        <input onBlur={handleBlur} class="form-control me-2" type="email" name='email' placeholder="Your Email" aria-label="email" required />
                        <button class="btn btn-outline-danger" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;