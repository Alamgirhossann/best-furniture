import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ProductContext } from "../../App";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(ProductContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result);
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        localStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div style={{ background: "rgb(248, 253, 253)" }}>
      <div className="container-fluid pb-5">
        <h1 className="text-center py-5">Login</h1>
        <div className="row">
          {
            <Form.Group controlId="select">
              <Form.Control
                as="select"
                size="lg"
                placeholder="Country/region"
                className="col-md-6 offset-md-3"
                style={{ height: "70px", borderRadius: "10px" }}
              >
                <option>Select Country/region</option>
                <option>Bangladesh(+88)</option>
                <option>India(+99)</option>
                <option>Nepal(+87)</option>
                <option>Pakistan(+25)</option>
                <option>Bhutan(+66)</option>
              </Form.Control>
            </Form.Group>
            // <Form.Group controlId="phone">
            //   <Form.Control
            //     className="col-md-6 offset-md-3"
            //     style={{ height: "70px", borderRadius: "10px" }}
            //     name="phone"
            //     type="text"
            //     placeholder="Phone"
            //   />
            // </Form.Group>
            // <Form.Text className="col-md-6 offset-md-3 fs-4 mb-4">
            //   We'll call or text you to confirm your number. Standard message and
            //   data rates apply.
            // </Form.Text>
          }
          <button
            onClick={handleGoogleSignIn}
            className="btn fs-4 col-md-6 offset-md-3"
            style={{ background: "#a9d6e5" }}
            type="search"
          >
            <span style={{ fontSize: "30px" }}>
              <FcGoogle />
            </span>
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
