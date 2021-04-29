import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {name, image_url, _id, price} = props.product;
    // const {name, img, key, price, stock} = props.product;
    return (
        <div className="product shadow p-3 mb-5 bg-white rounded">
            <div className='product-image'>
                <img src={image_url} alt="" style={{with:'100%', width:'100%'}}/>
            </div>
            <div className="product-details">
                
                <p style={{color:'black', fontFamily:'arial', fontSize:'16px'}}>{name}</p>
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <div><p style={{fontSize:'20px', color:'black'}}><strong>Price: ${price}</strong></p></div>
                    <div><Link to={`/checkout/${_id}`}><button className="btn btn-primary btn-sm">BUY NOW</button></Link></div>
                </div>

            </div>
        </div>
    );
};

export default Product;