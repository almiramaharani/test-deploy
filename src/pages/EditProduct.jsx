import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { handleEdit } from '../store/product-slice';

import './CreateProduct.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditProduct(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { id } = useParams();
    const [product, setProduct] = useState({
        productName: '',
        price: '',
        image: null
    });
    const imageInputRef = useRef(null);


    const handleEditProduct = (event) => {
        event.preventDefault();
        const uploadedImage = imageInputRef.current.files[0];
        const editedProduct = {
            numberProduct: id,
            productName: product.productName,
            price: product.price,
            image: uploadedImage
        };
        dispatch(handleEdit(editedProduct));

        setProduct({
            productName: '',
            image: '',
            price: ''
        });

        navigate(-1);
    }
    return (
        <>
            <div className="formContainer">
                    <h3>Edit Product</h3>
                    <form id='product-form' type="submit">
                        <div className='col pt-3'>
                            <label htmlFor="productName" className='form-label'>Product name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='productName' 
                                name='productName'
                                value={product.productName}
                                onChange={(e) => setProduct({ ...product, productName: e.target.value })}
                                required />
                        </div>
                        <div className='col'>
                            <label htmlFor="image" className='form-label'>Image of Product</label>
                            <div className='input-group mb-3'>
                                <input 
                                    type="file" 
                                    className='form-control' 
                                    id='image' 
                                    name='image' 
                                    style={{color: "#0D6EFD"}} 
                                    ref={imageInputRef}
                                    required />
                            </div>
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="price" className='form-label'>Product Price</label>
                            <input 
                                type="number"  
                                name="price" 
                                id="price" 
                                className='form-control'
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                placeholder='$ 1' required/>
                        </div>
                        <div className='column'>
                            <button id='delete-btn' className='me-2' onClick={() => {}}>Cancel</button>
                            <button id='edit-btn' onClick={handleEditProduct}>Edit</button>
                        </div>
                    </form>
                </div>
        </>
    )
}