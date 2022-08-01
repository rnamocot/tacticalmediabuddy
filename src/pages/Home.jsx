import React from 'react';
import '../styles/Home.css';
import { FaAward, FaHandHoldingUsd, FaHandsHelping } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='banner-text'>
                                <h1>TACTICAL MEDIA BUDDIES</h1>
                                <h2>Helping Small to Medium Local Businesses Achieve A Digital Advantage</h2>
                                <p>Give your business a big boost. Build your own website or let us build it for you.</p>
                                <div className='cta-btn'>
                                    <a href="/" className='cta-btn-click'>Get Free Consultation!</a>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='banner-img'>
                                <img src="./images/newbanner.png" alt="" width="100%" height="auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='col-md-4'>
                    <div className='service-1'>
                        <div className='services-icon'>
                            <FaAward className='s-icon' />
                        </div>
                        <h3 className='service-tile-heading'>Trusted</h3>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='service-2'>
                        <div className='services-icon'>
                            <FaHandHoldingUsd className='s-icon' />
                        </div>
                        <h3 className='service-tile-heading'>Quality</h3>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='service-3'>
                        <div className='services-icon'>
                            <FaHandsHelping className='s-icon' />
                        </div>
                        <h3 className='service-tile-heading'>Dependable</h3>
                    </div>
                </div>
            </div>
            <div className='services-list'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='ppc-service'>
                                <h2>PPC Marketing & Advertising Specialist</h2>
                                <h5>Drive Traffic, Turn Clicks Into Sales Instantly! </h5>
                                <p>Also known as paid search, pay per click or PPC. This is a cost effective way of reaching customers who are actively looking for your products or services in Google. </p>
                                <p>A great way for starting websites and also for established businesses who want to use additional marketing channels to get more sales and brand exposure. </p>
                                <div className='cta-btn'>
                                    <a href="/" className='cta-btn-click'>Get Free Consultation!</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='ppc-img'>
                                <img src="./images/ppcnew.png" alt="" width="100%" height="auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='webdev-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='webdev-image'>
                                <img src="./images/webdev.png" alt="" width="100%" height="auto" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='webdev-content'>
                                <h2>Web Development</h2>
                                <p>Your customers are online, your business needs to be online. It’s that simple. So, we make your options simple for you. Choose to build your own professional website for your company, or have your website creation and development taken care of for you. Tell us about your business and leave the rest to us. We'll find the words and images to tell your story.</p>
                                <div className='cta-btn'>
                                    <a href="/" className='cta-btn-click'>Get Free Consultation!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whitelabel-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='whitelabel-text'>
                                <h2>White Label</h2>
                                <p>Your customers are online, your business needs to be online. It’s that simple. So, we make your options simple for you. Choose to build your own professional website for your company, or have your website creation and development taken care of for you. Tell us about your business and leave the rest to us. We'll find the words and images to tell your story.</p>
                                <div className='cta-btn'>
                                    <a href="/" className='cta-btn-click'>Get Free Consultation!</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='whitelabel-image'>
                                <img src="./images/whitelabel.png" alt="" width="100%" height="auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <div className='testimonials-sec'>
                <div className="container">
                    <h2 className='heading-services'>What Our Clients Say</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card"> <i className="fa fa-quote-left u-color"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="user-about"> <span className="font-weight-bold d-block">Alex Smith</span> <span className="u-color">Designer | Developer</span>
                                        <div className="d-flex flex-row mt-1"> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> </div>
                                    </div>
                                    <div className="user-image"> <img src="https://i.imgur.com/UUW3zLx.jpg" className="rounded-circle" width="70" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card"> <i className="fa fa-quote-left u-color"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="user-about"> <span className="font-weight-bold d-block">Alex Smith</span> <span className="u-color">Designer | Developer</span>
                                        <div className="d-flex flex-row mt-1"> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> </div>
                                    </div>
                                    <div className="user-image"> <img src="https://i.imgur.com/UUW3zLx.jpg" className="rounded-circle" width="70" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card"> <i className="fa fa-quote-left u-color"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="user-about"> <span className="font-weight-bold d-block">Alex Smith</span> <span className="u-color">Designer | Developer</span>
                                        <div className="d-flex flex-row mt-1"> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> </div>
                                    </div>
                                    <div className="user-image"> <img src="https://i.imgur.com/UUW3zLx.jpg" className="rounded-circle" width="70" /> </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='contact-sec'>
                <div className='container'>
                    <div className='row'>
                        <h2>Book a job with us or get a Free Quote</h2>
                        <div className='col-md-6'>
                            <div className='cta-btn btn-left'>
                                <a href="/" className='contact-btn-click'>Get Free Quote</a>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='cta-btn btn-right'>
                                <a href="/" className='contact-btn-click'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;