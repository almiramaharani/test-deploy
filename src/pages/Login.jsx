import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === null) {
            localStorage.setItem('isLoggedIn', 'false');
        }
    }, []);

    const handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (name === 'email') {
            if(value === "") {
                setEmailError('Email is required');
            } else if (!emailRegex.test(value)) {
                setEmailError('Invalid email address');
            } else {
                setEmail(value);
                setEmailError("");
            }
        }

        if (name === 'password') {
            if (value === "") {
                setPasswordError('Password is required');
            } else if (value.length < 8) {
                setPasswordError('Password must be at least 8 characters');
            } else {
                setPassword(value);
                setPasswordError('');
            }
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if(emailError === '' && passwordError === '') {
            localStorage.setItem('isLoggedIn', 'true');
            setEmail('');
            setPassword('');

            navigate('/');
        } else {
            localStorage.setItem('isLoggedIn', 'false');
        }
    };

    return (
        <>
            <div className="containerStyle">
                <div className="formStyle">
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className='col pt-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='email' 
                                name='email'
                                onChange={handleChange}
                                />
                            <div className='error-message'>{emailError}</div>
                        </div>
                        <div className='col pt-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password' 
                                name='password'
                                onChange={handleChange}
                                />
                            <div className='error-message'>{passwordError}</div>
                        </div>
                        <button type='submit' className='btn btn-primary mt-3'>Login</button>
                    </form>

                </div>
            </div>
        </>
    )
}