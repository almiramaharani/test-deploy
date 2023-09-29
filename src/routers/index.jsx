import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import ListProduct from '../pages/ListProduct';
import ProductDetailPage from '../pages/DetailProduct';
import PrivateRoute from './private-route';
import Login from '../pages/Login';
import Registrasi from '../pages/Registrasi';
import EditProduct from '../pages/EditProduct';

export default function Routers() {
    return(
        <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registrasi/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path='/create-product' element={<ListProduct/>}/>
                <Route path='/product/:id' element={<ProductDetailPage/>}/>
                <Route path='/edit-product/:id' element={<EditProduct/>}/>
            </Route>
        </Routes>
    )
}