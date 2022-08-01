import React from 'react';
import '../styles/Navbar.css'
import { BsFacebook ,BsLinkedin ,BsInstagram ,BsTelephoneFill } from "react-icons/bs";

const NavbarMenu = () => {
    return (
        <>
            <div className='main-nav'>
                <div className='top-head'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                               <div className='cta-header'>
                                <a href='/'><BsFacebook className='header-icon' /></a>
                                <a href='/'><BsLinkedin className='header-icon' /></a>
                                <a href='/'><BsInstagram className='header-icon' /></a>
                               </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='cta-call-header'>
                                <a href='/'><BsTelephoneFill className='header-icon' /> 044 444 444</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <nav className='navbar navbar-expand-lg'>
                        <div className='container'>
                            <a className='navbar-brand' href="/">
                                <img src="./images/mainlogo1.png" alt="" width="200" height="auto" />
                            </a>
                            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="/">Home</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="/about">About</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="/services">Services</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default NavbarMenu;