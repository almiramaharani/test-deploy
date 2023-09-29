import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Registrasi.css';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Registrasi() {
    const initialValues = {
        fname: '',
        lname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const navigate = useNavigate();

    const handleSubmit = ({ setSubmitting }) => {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
    }

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        // Validasi first name
        if (!values.fname) {
            errors.fname = 'First name is required';
        } else if (values.fname.length < 3) {
            errors.fname = 'First name must be at least 3 characters';
        }

        // Validasi last name
        if (!values.lname) {
            errors.lname = 'Last name is required';
        } else if (values.lname.length < 3) {
            errors.lname = 'Last name must be at least 3 characters';
        }

        // Validasi email
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Passwotd must be at least 8 characters';
        }

        if (!values.confirmPassword){
            errors.confirmPassword = 'Confirm password is required';
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Password must be match';
        }

        return errors;
    }

    return (
        <>
            <div className="containerStyle">
                <div className="formStyle">
                    <h1 style={{textAlign: 'center'}}>Registrasi</h1>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='col pt-3'>
                                    <label htmlFor="fname" className='form-label'>First Name</label>
                                    <Field type="text" name="fname" className='form-control'/>
                                    <ErrorMessage name='fname' component='div'/>
                                </div>
                                <div className='col pt-3'>
                                    <label htmlFor="lname" className='form-label'>Last Name</label>
                                    <Field type="text" name="lname" className='form-control'/>
                                    <ErrorMessage name='lname' component='div'/>
                                </div>
                                <div className='col pt-3'>
                                    <label htmlFor="username" className='form-label'>Username</label>
                                    <Field type="text" name="username" className='form-control'/>
                                    <ErrorMessage name='username' component='div'/>
                                </div>
                                <div className='col pt-3'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <Field type="email" name="email" className='form-control'/>
                                    <ErrorMessage name='email' component='div'/>
                                </div>
                                <div className='col pt-3'>
                                    <label htmlFor="password" className='form-label'>Password</label>
                                    <Field type="password" name="password" className='form-control'/>
                                    <ErrorMessage name='password' component='div'/>
                                </div>
                                <div className='col pt-3'>
                                    <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
                                    <Field type="password" name="confirmPassword" className='form-control'/>
                                    <ErrorMessage name='confirmPassword' component='div'/>
                                </div>
                                <button type='submit' disabled={isSubmitting} className='btn btn-primary mt-3'>Register</button>
                            </Form>
                        )}

                    </Formik>
                </div>
            </div>
        </>
    )
}