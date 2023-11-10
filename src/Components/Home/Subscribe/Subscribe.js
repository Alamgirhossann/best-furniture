import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Subscribe = () => {
  const [subscriber, setSubscriber] = useState(null);

  const handleBlur = (e) => {
    const newSubscriber = { ...subscriber };
    newSubscriber[e.target.name] = e.target.value;
    setSubscriber(newSubscriber);
  };
  const handleSubscribe = (e) => {
    // const emailRegex =new RegExp (/^\S+@\S+\.\S+$/)
    if (subscriber) {
      fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(subscriber),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("Your subscription is successfull");
          }
        });
    } else {
      alert("Please Enter Your Valid Email");
    }

    e.preventDefault();
  };
  return (
    <div className="container mt-4 pb-4">
      <div className="">
        <div className="text-center">
          <p className="fw-bold text-dark fs-md-5 fs-3">
            <FontAwesomeIcon icon={faVolumeUp} /> Subscribe For Get Newsletter
          </p>
        </div>
        <div className="">
          <form className="d-flex" onSubmit={handleSubscribe}>
            <input
              onBlur={handleBlur}
              className="form-control me-2"
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="email"
              required
            />
            <button
              className="btn"
              style={{ background: "#a9d6e5" }}
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
