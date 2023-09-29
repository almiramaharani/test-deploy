import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoute() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        return <Outlet/>
    }

    alert('Silahkan Login');
    setTimeout(() => {
        navigate('/')
    }, 1000);
    return null;
}