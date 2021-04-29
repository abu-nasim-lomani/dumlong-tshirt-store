import React, { useContext } from 'react';
import './Header.css';
import 'typeface-roboto';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    return (
        <div className="header">
            <div className="header-left">
                <h1>Dumlong T-Store</h1>
            </div>
            <div className="header-right">
                <Link to="/"><p className="btn btn-outline-secondary">Home</p></Link>
                
                {
                    loggedInUser.email && <Link to="/orders"><p className="btn btn-outline-secondary">Order</p></Link>
                }
                <Link to="/admin"><p className="btn btn-outline-secondary">Admin</p></Link>
                
                {
                    loggedInUser.email ? <p className="btn btn-outline-secondary"><img src={loggedInUser.photoURL} alt="" className="avatar"/>{loggedInUser.name}</p> : <Link to="/login"><p className="btn btn-outline-primary">Login</p></Link>
                }
            </div>
        </div>
    );
};

export default Header;