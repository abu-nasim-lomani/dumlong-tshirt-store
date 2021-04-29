import React, { useEffect, useState } from 'react';
import Manage from './Manage/Manage';
const ManageProduct = () => {
    const [product, setProduct]= useState([]);
     useEffect(() => {
         fetch('https://shrouded-ridge-06647.herokuapp.com/products')
         .then((response) =>response.json())
         .then(data => {
             console.log(data)
            setProduct(data);
         })
     },[])
     console.log(product.name)
     
    return (
        <div>
            {
                product.length===0 && <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            }
            {
                product ? product.map(product =><Manage product={product}></Manage>):''
            }
        </div>
    );
};

export default ManageProduct;