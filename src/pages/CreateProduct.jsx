import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from "../store/product-slice";
import bootstrapLogo from '../assets/bootstrap-logo.svg.png';
import './CreateProduct.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from './Greeting';

function generateRandomNumber() {
    return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
}

function CreateProduct () {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        numberProduct: null,
        productName: '',
        category: '',
        image: null,
        productFreshnessRadio: '',
        addDesc: '',
        price: '',
        search: '',
        isFormValid: false,
        errorField: {
            productName: true,
            price: true,
            image: true,
        },
    });

    const regex = /[/@#{}]/;
    const acceptedFile = ['png', 'jpg', 'jpeg'];
    const imageInputRef = useRef(null);

    const addNewproduct = (event) => {        
        event.preventDefault();

        const formFields = 
            data.productName && 
            data.category && 
            data.image && 
            data.productFreshnessRadio && 
            data.addDesc && 
            data.price;

        if (data.isFormValid && formFields) {
            const randomNum = generateRandomNumber();
            const newProduct = {
                numberProduct: randomNum,
                productName: data.productName,
                category: data.category,
                image: data.image,
                productFreshnessRadio: data.productFreshnessRadio,
                addDesc: data.addDesc,
                price: data.price,
            }

            setData({...data,newProduct});
            
            dispatch(addProduct(newProduct));

            alert("Successfully added new product");

        } else {
            alert("Failed to add new product, please fill out all the fields");
        }

        imageInputRef.current.value = '';
        setData({
            numberProduct: null,
            productName: '',
            category: '',
            image: null,
            productFreshnessRadio: '',
            addDesc: '',
            price: '',
            search: '',
            isFormValid: false,
            errorField: {
                productName: true,
                price: true,
                image: true,
            },
        });
        
        document.getElementById('image').value = '';
        const radioElements = document.getElementsByName('productFreshnessRadio');
        radioElements.forEach((radio) => {
            if (radio.checked) {
                radio.checked = false; 
            }
        });
    };

    const handleChangeField = (event) => {
        const { name, value } = event.target;

        let isFormValidCurr = true;
        const updatedErrorField = {...data.errorField};

        if (name === 'productName') {
            if (value.length > 10 ) {
                alert("Product name must not exceed 10 characters.");
                updatedErrorField.productName = true;
            } else if (regex.test(value)){
                alert("Please enter a valid product name.");
                updatedErrorField.productName = true;
            } else {
                updatedErrorField.productName = false;

            }
        }

        if (name === 'price') {
            if (value <= 0) {
                alert("Please enter a valid price.");
                updatedErrorField.price = true;
            } else {
                updatedErrorField.price = false;
            }
        }

        if (name === 'image') {
            const selectedFile = event.target.files[0];

            if (selectedFile) {
                const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

                if (acceptedFile.includes(fileExtension)) {
                    updatedErrorField.image = false
                } else {
                    alert('Invalid file type. Please select a PNG, JPG, or JPEG file.');
                    imageInputRef.current.value = '';    
                }
            }
        }

        const inputElement = event.target;

        if (updatedErrorField[name]) {
            inputElement.classList.add('invalid-field');
        } else {
            inputElement.classList.remove('invalid-field');
        }

        isFormValidCurr = !updatedErrorField.productName && !updatedErrorField.price && !updatedErrorField.image;
        setData({
            ...data,
            [name]: value,
            errorField: updatedErrorField,
            isFormValid: isFormValidCurr,
        });
    };

    return (
        <>
            <div className="mainContainer">
                {/* Content */}
                <div className="content">
                    <img src={bootstrapLogo} alt="Bootstrap logo" />
                    <Greeting/>
                </div>
                {/* Form */}
                <div className="formContainer">
                    <h3>Detail Product</h3>
                    <form id='product-form' type="submit">
                        <div className='col pt-3'>
                            <label htmlFor="productName" className='form-label'>Product name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='productName' 
                                name='productName'
                                value={data.productName}
                                onChange={handleChangeField}
                                required />
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="category" className='form-label'>Product Category</label>
                            <div className='input-group mb-3'>
                                <select 
                                    name="category" 
                                    id="category" 
                                    className='form-select' 
                                    value={data.category}
                                    onChange={handleChangeField}
                                    required
                                >
                                    <option value="" disabled>Choose...</option>
                                    <option data-testid="select-option" value="electronic">Electronic</option>
                                    <option data-testid="select-option" value="fashion">Fashion</option>
                                    <option data-testid="select-option" value="food">Food</option>
                                </select>
                            </div>
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
                                    onChange={handleChangeField}
                                    required />
                            </div>
                        </div>
                        <div className='col pb-3'>
                            <label htmlFor="productFreshness" className='form-label'>Product Freshness</label>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    className='form-check-input' 
                                    name='productFreshnessRadio' 
                                    id='brandNew' 
                                    value="Brand New" 
                                    onChange={handleChangeField}
                                    required
                                />
                                <label htmlFor="brandNew" className='form-check-label'>Brand New</label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    className='form-check-input' 
                                    name='productFreshnessRadio' 
                                    id='secondHand' 
                                    value="Second Hand"
                                    onChange={handleChangeField}
                                    required
                                />
                                <label htmlFor="secondHand" className='form-check-label'>Second Hand</label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    className='form-check-input' 
                                    name='productFreshnessRadio' 
                                    id='refufbished' 
                                    value="Refufbished" 
                                    onChange={handleChangeField}
                                    required
                                />
                                <label htmlFor="refufbished" className='form-check-label'>Refufbished</label>
                            </div>
                        </div>
                        <div className='col'>
                            <label htmlFor="addDesc" className='form-label'>Additional Description</label>
                            <textarea 
                                className='form-control' 
                                name="addDesc" 
                                id="addDesc"
                                onChange={handleChangeField}
                                value={data.addDesc}
                                required></textarea>
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="price" className='form-label'>Product Price</label>
                            <input 
                                type="number"  
                                name="price" 
                                id="price" 
                                className='form-control'
                                onChange={handleChangeField}
                                value={data.price}
                                placeholder='$ 1' required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3" id="submit-btn" onClick={addNewproduct}>Submit</button>
                    </form>
                </div>
            </div>            
        </>
    )
};

export default CreateProduct;
    

    