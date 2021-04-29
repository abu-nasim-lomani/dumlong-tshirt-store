import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    
    const [orders, setOrders]= useState([]);
    useEffect(()=>{
        fetch(`https://shrouded-ridge-06647.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
        })
    }, [])
    return (
        <div style={{margin:'auto'}}>
            <h1 style={{textAlign: 'center', marginTop:'50px'}}>Your Total Order {orders.length} :</h1>
            {
                orders.length===0 && <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            }
            {
                orders.map(order =><li>Name: {order.name} Email: {order.email} Product: {order.productName} Category: {order.category} Price: {order.price} Date: {(new Date(order.date)).toDateString('dd/MM/yyyy')}</li>)
            }
        </div>
    );
};

export default Order;