import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './HeaderWithLogo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../../../App';

const HeaderWithLogo = () => {
    const {cart} = useContext(ProductContext);
    const [cartItem] = cart;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className='logo-align'>
                        <Link class="navbar-brand fs-1 fw-bolder text-white ms-4" to="/"> Best Furniture</Link>
                    </div>
                </div>
                <div className="col-md-6 mt-3 mb-3">
                    <div className="d-flex justify-content-end">
                        <form class="d-none d-lg-block">
                            <div className="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-dark" type="submit">Search</button>
                            </div>
                        </form>
                        <div className='align ms-4'>
                            <span className='userIcon'><FontAwesomeIcon icon={faUser} /></span>
                            <Link to='/login' class="d-block text-white fs-5"> Sign in</Link>
                        </div>
                        <div className='align ms-4'>
                            {cartItem.length ?(
                                <div>
                                <span className='cartIcon'><FontAwesomeIcon icon={faCartPlus} />{cartItem.length}</span>
                                <span><Link class="d-block text-white fs-5" to='/cart'>Cart</Link></span>
                            </div>
                            ):(
                                <div>
                                <span className='cartIcon'><FontAwesomeIcon icon={faCartPlus} />0</span>
                                <span><Link class="d-block text-white fs-5" to='/cart'>Cart</Link></span>
                            </div>
                            )
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderWithLogo;