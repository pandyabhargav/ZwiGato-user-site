import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Menulisting() {
  return (
    <>
         <section className='bg-col'>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>Menu Grid</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>Menu Grid</Link></p>
                    </div>
                </div>
                <Container>
                    <div className='col-12 menu-grid d-flex flex-wrap'>
                        <div className='col-3'>

                        </div>
                        <div className='col-6 d-flex flex-wrap pt-50 pb-50'>
                        
                        </div>
                        <div className='col-3 bill pt-50 pb-50'>
                            <div className='bg-white p-3'>
                                <h5>Cart Items</h5>
                                <hr />
                                <div className='d-flex flex-wrap'>
                                    <h6 className='px-2'>Ultimate Loaded Nacho Fiesta</h6><h6>$40</h6>
                                </div>
                                <p className='px-2'>Hot Nacho Chips</p>
                                <div className='d-flex flex-wrap'>
                                    <ul className='col-8'>
                                        <li className='d-flex flex-wrap align-items-center py-2'>
                                            <i class="fa-solid fa-circle px-2"></i> Serve 1
                                        </li>
                                    </ul>
                                    <div className='col-4'>
                                    <ButtonGroup>
                                        <Button className='btn-add-remove'>-</Button>
                                        <input type="number" placeholder='1' className='text-center' />
                                        <Button className='btn-add-remove'>+</Button>
                                    </ButtonGroup>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex flex-wrap'>
                                    <h6 className='px-2'>Smoked Salmon Bagel</h6><h6>$40</h6>
                                </div>
                                <p className='px-2'>Smoked Biscuit</p>
                                <div className='d-flex flex-wrap'>
                                    <ul className='col-8'>
                                        <li className='d-flex flex-wrap align-items-center py-2'>
                                            <i class="fa-solid fa-circle px-2"></i> Serve 2
                                        </li>
                                    </ul>
                                    <div className='col-4'>
                                    <ButtonGroup>
                                        <Button className='btn-add-remove'>-</Button>
                                        <input type="number" placeholder='1' className='text-center' />
                                        <Button className='btn-add-remove'>+</Button>
                                    </ButtonGroup>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex flex-wrap'>
                                    <h6 className='px-2'>Cranberry Club Sandwich</h6><h6>$40</h6>
                                </div>
                                <p className='px-2'>Vegetables</p>
                                <div className='d-flex flex-wrap'>
                                    <ul className='col-8'>
                                        <li className='d-flex flex-wrap align-items-center py-2'>
                                            <i class="fa-solid fa-circle px-2"></i> Serve 3
                                        </li>
                                    </ul>
                                    <div className='col-4'>
                                    <ButtonGroup>
                                        <Button className='btn-add-remove'>-</Button>
                                        <input type="number" placeholder='1' className='text-center' />
                                        <Button className='btn-add-remove'>+</Button>
                                    </ButtonGroup>
                                    </div>
                                </div>
                                <div className='p-2 pt-4'>
                                    <h5>Bill Details</h5>
                                </div>
                                <div className='p-2 d-flex flex-wrap col-12'>
                                    <ul className='col-12'>
                                        <li className='d-flex col-12 flex-wrap justify-content-between'>
                                            Sub Total <h5>$110</h5>
                                            Delivery Charge (2 kms) <h5 className='green'>Free</h5>   
                                            Discount (10%) <h5>$10</h5>   
                                        </li>
                                    </ul>
                                </div>
                                <hr />  
                                <div className='col-12 p-2 d-flex flex-wrap'>
                                <ul className='col-12'>
                                        <li className='d-flex col-12 flex-wrap justify-content-between'>  
                                            <h5>To Pay</h5><h5 className='green'>$100</h5>  
                                        </li>
                                    </ul>
                                </div>  
                                <div className='col-12'>
                                    <button className='bt1 p-2 col-12 rounded'>
                                        PROCEED TO PAYMENT
                                    </button>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
    </>
  )
}

export default Menulisting