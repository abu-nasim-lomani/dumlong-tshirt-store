import React from 'react';
import './SearchButton.css'
const SearchButton = () => {
    return (
        <div className="search container">
            <div className="search-option">
                <form class="d-flex form">
                    <input class="form-control me-2" type="search" placeholder="Find your favorite items" aria-label="Search" style={{backgroundColor:'lightgray', textAlign:'center', color:'navy'}}/>
                    <button class="btn btn-outline-success" type="submit"  style={{backgroundColor:'tomato', color:'white'}}>Search</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SearchButton;