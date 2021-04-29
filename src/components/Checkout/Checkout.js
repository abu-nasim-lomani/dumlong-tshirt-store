import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css'

const Checkout = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { productId } = useParams();

    const [products, setProducts]= useState([]);
    

    useEffect(()=>{
        fetch('https://shrouded-ridge-06647.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    }, [productId]);


    let name='';
    let price='';
    let category='';
    const productFind = products.find(pd => pd._id === productId);
    if (productFind) {
        name=productFind.name;
        price=productFind.price;
        category=productFind.category;
    }
    
    
    const orderDetails =productFind ? {order:{name:name, price:price, category:category }}:''
    console.log(orderDetails)
    


    const [count, setCount] = useState({
        isClick: false
    });
    const handleSubmit = () => {
        const res = { isClick: true }
        setCount(res);
    }

    const handleOrderSubmit=()=>{
        const newOrder={...loggedInUser, productName:name, price:price, category:category, date: new Date()}
        fetch('https://shrouded-ridge-06647.herokuapp.com/addOrders', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(response =>response.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className='checkout'>
                    <h2>Checkout:</h2>
                    <table class="table text-center  shadow p-3 mb-5 bg-white rounded">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col " id="col-width">Product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="tr-border">
                                <th scope="row">1</th>
                                <td>{name}</td>
                                <td>{category}</td>
                                <td>${price}</td>
                            </tr>
                            <tr className='table-primary'>
                                <th scope="row"></th>
                                <td><strong>Total</strong></td>
                                <td></td>
                                <td><strong>${price}</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <button className='btn btn-info btn-md checkbtn ml-auto p-2 bd-highlight d-flex' onClick={handleSubmit}>Checkout</button>
                    
                    
                    {
                        count.isClick ?
                            <div className="address-detail">
                                <form className='shadow-lg p-3 mb-5 bg-body rounded'>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder={loggedInUser.email} disabled />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Name</label>
                                            <input type="text" class="form-control" id="inputName4" placeholder={loggedInUser.name} disabled />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Address 2</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">City</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputZip">Zip</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label" for="gridCheck" >
                                                agree term and condition
      </label>
                                        </div>
                                    </div>
                                    
                                </form>
                                <button type="submit" class="btn checkbtn btn-info bd-highlight" onClick={handleOrderSubmit} style={{display: 'grid', margin:'auto'}}>Sign in</button>
                            </div> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Checkout;