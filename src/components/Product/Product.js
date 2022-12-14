import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, ratings, price, seller, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <div>
                    <h6 className='product-name'>{name}</h6>

                    <p>Price:${price}</p>
                </div>
                <div>
                    <p><small>Manufacture:{seller}</small></p>
                    <p>
                        <small>{ratings} stars
                        </small>
                    </p>
                </div>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'><p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;