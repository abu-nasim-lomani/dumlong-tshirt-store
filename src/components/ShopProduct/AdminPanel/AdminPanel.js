import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import AddProducts from './AddProducts/AddProducts';
import ManageProduct from './AddProducts/ManageProduct/ManageProduct';
import './AdminPanel.css'

const AdminPanel = () => {
    const [toggle, setToggle] = useState({
    })

    const handleAddProductShow = () => {
        const click = { isClick: true }
        setToggle(click);
    }

    const handleManageProduct = () => {
        const click = { isClick: false }
        setToggle(click);
    }
    return (
        <div>
            <Header></Header>
            <div className="containers ">
                <div className="left-side">
                    <h1>Admin</h1>
                    <div>

                        <Link to='/admin'><p className="btn btn-outline-info btn-style" onClick={handleManageProduct}>Manage </p></Link><br />
                        <Link to="/admin"><p className="btn btn-outline-info btn-style" onClick={handleAddProductShow}>Add Product <FaPlus className="ml-5" /></p><br /></Link>

                    </div>
                </div>



                <div className="right-side">
                    <div style={{ width: '80%', margin: 'auto', padding: ' 50px 0px' }} className="">

                        <table class="table table-striped table-dark shadow-lg p-3 mb-5 bg-black  " style={{borderRadius:'15px'}}>
                            
                            {
                                toggle.isClick ? <AddProducts></AddProducts> : <ManageProduct></ManageProduct>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;