import React from 'react';
import { FaDropbox, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Manage = (props) => {
    const { name, category, image_url, stock, seller, price, _id } = props.product;
    const deleteProduct = id => {
        fetch('http://localhost:4000/delete/'+id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleted successfully", data)
            })

    }

    return (
        <tbody>
            <th scope="row"><img src={image_url} style={{width:'40px', borderRadius:'50%'}} alt=""/></th>
            <td style={{width:'30%'}}>{name}</td>
            <td>{category}</td>
            {/* <td>{stock}</td> */}
            <td>{seller}</td>
            <td>${price}</td>
            <td style={{cursor:'pointer', marginLeft:'30px', color:'white'}} className="btn btn-outline-secondary"><FaEdit></FaEdit></td>
            <td style={{cursor:'pointer', color:'white'}} className="btn btn-outline-secondary" onClick={() => deleteProduct(_id)}><FaTrash></FaTrash></td>
        </tbody>
    );
};

export default Manage;