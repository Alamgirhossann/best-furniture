import React from 'react';

const ProductCard = ({product, addProduct}) => {
   
    return (
        <div className="col-md-12">
            <div style={{ height: "400px" }} class="card">
                <img style={{ height: "200px" }} src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text fw-bold">{product.description}</p>
                    <h4>Price: ${product.price}</h4>
                </div>
                <button onClick={()=>addProduct(product)} className='btn btn-danger'>Add to Cart</button>
            </div>
        </div >

    );
};

export default ProductCard;