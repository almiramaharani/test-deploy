// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Header.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    console.log(isLoggedIn);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    }

    return (
        <>
             <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">
                <a id="logo-header" className="navbar-brand" href="#">Simple Header</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-5">
                            <button type="button" className="nav-btn btn btn-link">Home</button>
                        </li>
                        <li className="nav-item me-5">
                            <button type="button" className="nav-btn btn btn-link">Features</button>
                        </li>
                        <li className="nav-item me-5">
                            <button type="button" className="nav-btn btn btn-link">Pricing</button>
                        </li>
                        <li className="nav-item me-5">
                            <button type="button" className="nav-btn btn btn-link">FAQs</button>
                        </li>
                        <li className="nav-item me-5">
                            <button type="button" className="nav-btn btn btn-link">About</button>
                        </li>
                        <li className="nav-item me-5">
                            {isLoggedIn ? 
                                <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
                                : 
                                <>
                                <Link to='/login'>
                                    <button type="button" className="btn btn-primary">Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button type="button" className="btn btn-success ms-2">Register</button>
                                </Link>
                                </>
                            }
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}