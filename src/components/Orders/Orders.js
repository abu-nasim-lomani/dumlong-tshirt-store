import React from 'react';
import Header from '../Header/Header';
import Order from './Order/Order';
const Orders = () => {
    return (
        <div>
            <Header></Header>
            <div style={{textAlign: 'center'}}>
                <Order></Order>
            </div>
        </div>
    );
};

export default Orders;