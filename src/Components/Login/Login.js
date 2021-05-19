import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { ProductContext } from '../../App';
import Header from '../Shared/Header/Header';
import HeaderWithLogo from '../Shared/HeaderWithLogo/HeaderWithLogo';
import Footer from '../Shared/Footer/Footer';
const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(ProductContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log(result);
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photo: photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div >
            <div className='bg-danger text-white'>
                <HeaderWithLogo></HeaderWithLogo>
                <Header></Header>
            </div>
            <div className='container-fluid mb-5'>
                <h1 className='text-center mb-4 mt-5'>Login</h1>
                <div className='row'>
                    <Form.Group controlId="select">
                        <Form.Control as="select" size="lg" placeholder='Country/region' className='col-md-6 offset-md-3' style={{ height: "70px", borderRadius: "10px" }}>
                            <option>Select Country/region</option>
                            <option>Bangladesh(+88)</option>
                            <option>India(+99)</option>
                            <option>Nepal(+87)</option>
                            <option>Pakistan(+25)</option>
                            <option>Bhutan(+66)</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Control className='col-md-6 offset-md-3' style={{ height: "70px", borderRadius: "10px" }} name='phone' type='text' placeholder="Phone" />
                    </Form.Group>
                    <Form.Text className='col-md-6 offset-md-3 fs-4 mb-4' >We'll call or text you to confirm your number. Standard message and data rates apply.</Form.Text>
                    <button onClick={handleGoogleSignIn} className="btn btn-danger fs-4 col-md-6 offset-md-3" type='search'>
                        Continue
                    </button>
                    <Form.Text className='text-center mt-4 fs-4' >Don't have an account? <Link>Sign up</Link> </Form.Text>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;