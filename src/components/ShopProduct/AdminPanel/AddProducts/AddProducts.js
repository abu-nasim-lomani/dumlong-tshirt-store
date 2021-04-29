import React, { useState } from 'react';
import './AddProducts.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {
    const [imageURL, setImageURL]=useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        const evenData={
            name: data.name,
            category: data.category,
            seller: data.seller,
            stock: data.stock,
            price: data.price,
            image_url: imageURL
        };
        const uri=`https://shrouded-ridge-06647.herokuapp.com/addProducts`;
        fetch(uri,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(evenData)
        })
        
    };

    const handleImageUpload=event => {
        const imageData=new FormData();
        imageData.set('key','0334c4afa89466293fef235bb0c031bf');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    // console.log(imageURL)
    return (
        <div className="add-product">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:'400px'}}>
                <div style={{display: 'flex'}}>
                <input name="name" className="form-control" placeholder="Product Title" ref={register({ required: true })} /> 
                <input name="category" className="form-control" placeholder="Category" ref={register({ required: true })} /> <br/>
                </div><br/>
                {/* <input name="seller" className="form-control" placeholder="Seller name" ref={register({ required: true })} /> <br/> */}
                {/* <input name="stock" className="form-control" placeholder="inStock" ref={register} /> <br/> */}
                <input name="price" className="form-control" placeholder="Product Price" ref={register({ required: true })} /> <br/>
                {/* <input name="description" className="form-control" placeholder="Product Description" ref={register} /> <br/> */}
                <label for="exampleFormControlFile1" >Upload Your Product Image</label>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <input name="exampleRequired" className="form-control w-75" type="file" onChange={handleImageUpload} accept="image/*"/><br/>
                <img src={imageURL} style={{width:'100px', height:'100px', marginLeft:'30px'}} alt=""/>
                {
                    imageURL===null && <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
                </div>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddProducts;