import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Menugrid() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Ultimate Loaded cheese Pizza', price: 12, quantity: 0 },
        { id: 2, title: 'Smoked Salmon Bagel', price: 40, quantity: 0 },
        { id: 3, title: 'Cranberry Club Sandwich', price: 20, quantity: 0 },
        { id: 4, title: 'Espresso Coffee', price: 30, quantity: 0 },
        { id: 5, title: 'Pari Pari Fries', price: 50, quantity: 0 },
        { id: 6, title: 'Pasta salad with balsamic vinegar', price: 30, quantity: 0 },
        { id: 7, title: 'Paneer Achari Sandwich', price: 50, quantity: 0 },
        { id: 8, title: 'Creamy garlic mushroom spinach', price: 99, quantity: 0 },
        { id: 9, title: 'chizy khman', price: 9, quantity: 0 }
    ]);

    const [selectedItemId, setSelectedItemId] = useState(null);

    // Function to handle adding items to cart
    const addToCart = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    // Function to handle removing items from cart
    const removeFromCart = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    // Calculate total bill amount
    const calculateTotal = () => {
        return Math.floor(cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0));
    };

    // Filter items based on selected ID
    const filteredItems = selectedItemId 
        ? cartItems.filter(item => item.id === selectedItemId) 
        : cartItems;

    return (
        <>
            <section className='bg-col'>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>Menu Grid</h2>
                        <p className='pb-5 text-white'>
                            <Link className='px-1'><i className="fa-sharp fa-solid fa-house"></i> Home </Link> / 
                            <Link className='px-1'> Menu Grid</Link>
                        </p>
                    </div>
                </div>
                <Container>
                    <div className='col-12 menu-grid d-flex flex-wrap'>
                        <div className='col-9 scrool d-flex flex-wrap pt-50 pb-50'>
                            {filteredItems.map(item => (
                                <div key={item.id} className='col-4 p-1'>
                                    <Card style={{ width: 'auto' }}>
                                        <div className='card-wraper m-0 '>
                                            <Card.Img variant="center" src={`images/vp-${item.id}.png`} className='img-fluid' />
                                        </div>
                                        <Card.Body className='col-12'>
                                            <Card.Text className='py-1'>
                                                Maxican, Italian
                                            </Card.Text>
                                            <Card.Title>{item.title}</Card.Title>
                                            <div className='d-flex col-12 flex-wrap '>
                                                <h6 className='col-6 pb-3'>${item.price} <del className='del'>$20</del></h6>
                                                <p className='col-6 d-flex pb-3 flex-wrap justify-content-end align-items-center'>
                                                    <i className="fa-solid fa-star mx-1"></i>4.3
                                                </p>
                                            </div>
                                            <div className='d-flex flex-wrap col-12'>
                                                <div className='col-5 d-flex  flex-wrap align-items-center'>
                                                    <ButtonGroup>
                                                        <Button className='btn-add-remove' onClick={() => removeFromCart(item.id)}>-</Button>
                                                        <input type="number" placeholder='1' className='text-center' value={item.quantity} readOnly />
                                                        <Button className='btn-add-remove' onClick={() => addToCart(item.id)}>+</Button>
                                                    </ButtonGroup>
                                                </div>
                                                <div className='col-7 d-flex flex-wrap justify-content-end align-items-center'>
                                                    <Button className='bt1 rounded' onClick={() => setSelectedItemId(item.id)}>View Details</Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-3 bill pt-50'>
                            <div className='bg-white p-3'>
                                <h5>Cart Items</h5>
                                <hr />
                                {cartItems.filter(item => item.quantity > 0).map(item => (
                                    <div key={item.id} className='d-flex bill-respt flex-wrap'>
                                        <h6 className='px-2'>{item.title}</h6>
                                        <h6>${item.price}</h6>
                                        <p className='px-2'>Description</p>
                                        <div className='d-flex flex-wrap'>
                                            <ul className='col-8'>
                                                <li className='d-flex flex-wrap align-items-center py-2'>
                                                    <i className="fa-solid fa-circle px-2"></i> Serve 1
                                                </li>
                                            </ul>
                                            <div className='col-4'>
                                                <ButtonGroup>
                                                    <Button className='btn-add-remove' onClick={() => removeFromCart(item.id)}>-</Button>
                                                    <input type="number" placeholder='1' className='text-center' value={item.quantity} readOnly />
                                                    <Button className='btn-add-remove' onClick={() => addToCart(item.id)}>+</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                                <div className='p-2 pt-4'>
                                    <h5>Bill Details</h5>
                                </div>
                                <div className='p-2 d-flex flex-wrap col-12'>
                                    <ul className='col-12'>
                                        <li className='d-flex col-12 flex-wrap justify-content-between'>
                                            Sub Total <h5>${calculateTotal()}</h5>
                                            Delivery Charge (2 kms) <h5 className='green'>Free</h5>
                                            Discount (10%) <h5>${calculateTotal() * 0.1}</h5>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div className='col-12 p-2 d-flex flex-wrap'>
                                    <ul className='col-12'>
                                        <li className='d-flex col-12 flex-wrap justify-content-between'>
                                            <h5>To Pay</h5><h5 className='green'>$ {calculateTotal() - (calculateTotal() * 0.1)}</h5>
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
    );
}

export default Menugrid;
