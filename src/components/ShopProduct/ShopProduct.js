import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './ShopProduct.css'
document.title="Dumlong T-Shirt Store"

const ShopProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-ridge-06647.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products.name)
    return (
        <div className="container shop-product">
            {
                products.length === 0 && <p style={{color: 'black', fontSize:'100px'}}>Loading.....</p>
            }
            {
                products.map(pd => <Product product={pd} key={pd.key}></Product>)
            }
        </div>
    );
};

export default ShopProduct;