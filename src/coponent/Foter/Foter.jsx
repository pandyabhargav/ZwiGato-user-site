import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Foter() {
    return (
        <>
            <div className='foter'>
                <Container>
                    <div className='col-12 d-flex py-3'>
                        <div className='col-6 py-5 fot-1 '>
                            <h4>Don't pass up our fantastic discounts. email offers from <br /> all of our best eateries</h4>
                        </div>
                        <div className='col-6 py-5 text-white'>
                            <InputGroup className="mb-3 input">
                                <Form.Control
                                    placeholder="Enter your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className='input-foter'
                                />
                                <Button variant="outline-secondary" className='bt1 rounded' id="button-addon2">
                                    Subscribe Now
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Container>
                <hr />
                <Container>
                    <div className='col-12 d-flex flex-wrap'>
                        <div className='col-4 text-white p-5'>
                            <h4 className='p-1 foter-logo'>
                            ZwiGato
                            </h4>
                            <p className='p-1 fot-p'>
                                Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of your own home.
                            </p>
                            <div className='d-flex flex-wrap'>
                                <div className='bg-icons my-2 me-2'>
                                    <i className="fa-brands fa-facebook-f "></i>
                                </div>
                                <div className='bg-icons m-2'>
                                    <i className="fa-brands fa-twitter "></i>
                                </div>
                                <div className='bg-icons m-2'>
                                    <i className="fa-brands fa-linkedin-in "></i>
                                </div>
                                <div className='bg-icons m-2'>
                                    <i className="fa-brands fa-instagram "></i>
                                </div>
                                <div className='bg-icons m-2'>
                                    <i className="fa-brands fa-youtube "></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 p-5 d-flex justify-content-start'>
                            <div className='head-foter'>
                                <h4 className='px-1'> Company</h4>
                                <div className='d-flex justify-content-start'>
                                    <ul >
                                        <li>
                                            <a href="">About us</a>
                                        </li>
                                        <li>
                                            <a href=""> Contact us</a>
                                        </li>
                                        <li>
                                            <a href=""> Offer</a>
                                        </li>
                                        <li>
                                            <a href=""> FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 p-5 d-flex justify-content-start'>
                            <div className='head-foter'>
                                <h4 className='px-1'> Account</h4>
                                <div className='d-flex justify-content-start'>
                                    <ul >
                                        <li>
                                            <a href="">My orders</a>
                                        </li>
                                        <li>
                                            <a href="">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="">Shopping Cart</a>
                                        </li>
                                        <li>
                                            <a href=""> Saved Address</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 p-5 d-flex justify-content-start'>
                            <div className='head-foter'>
                                <h4 className='px-1'>Useful links</h4>
                                <div className='d-flex justify-content-start'>
                                    <ul >
                                        <li>
                                            <a href="">Blogs</a>
                                        </li>
                                        <li>
                                            <a href=""> Login</a>
                                        </li>
                                        <li>
                                            <a href=""> Register</a>
                                        </li>
                                        <li>
                                            <a href=""> Profile</a>
                                        </li>
                                        <li>
                                            <a href=""> Settings</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 p-5 d-flex justify-content-start'>
                            <div className='head-foter'>
                                <h4 className='px-1'> Top Brands</h4>
                                <div className='d-flex justify-content-start'>
                                    <ul >
                                        <li>
                                            <a href="">PizzaBoy</a>
                                        </li>
                                        <li>
                                            <a href=""> Saladish</a>
                                        </li>
                                        <li>
                                            <a href=""> IcePops</a>
                                        </li>
                                        <li>
                                            <a href=""> Maxican Hoy</a>
                                        </li>
                                        <li>
                                            <a href=""> La Foodie</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className='col-12 d-flex flex-wrap foter-botom p-4'>
                        <div className='col-7 text-white'>
                            <h5>@ Copyright 2024 ZOMO. All rights Reserved.</h5>
                        </div>
                        <div className='col-5'>
                            <img src=".\images\footer-card.png" alt="foter-cards"  className='img-fluid' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Foter