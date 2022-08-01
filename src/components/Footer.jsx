import React from 'react';
import '../styles/Footer.css';
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className='footer-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <a className='navbar-brand' href="/">
                                <img src="./images/mainlogo1.png" alt="" width="200" height="auto" />
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <ul>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Terms and Conditions</a></li>
                            </ul>

                        </div>
                        <div className='col-md-3'>
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Services</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <div className='cta-header'>
                                <a href='/'><BsFacebook className='header-icon' /></a>
                                <a href='/'><BsLinkedin className='header-icon' /></a>
                                <a href='/'><BsInstagram className='header-icon' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='credit-footer'>
                <p>All Rights Reserved | 2022</p>
            </div>


        </>
    );
}

export default Footer;