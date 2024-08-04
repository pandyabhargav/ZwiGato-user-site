import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

const restaurants = [
    {
        name: 'Poultry Palace',
        rating: 3.9,
        description: 'Chicken quesadilla, avocado....',
        location: 'New Jersey',
        distance: '3 km',
        time: '25 min',
        imgSrc: '/images/vp-9.png',
    },
    {
        name: 'Ribeye Junction',
        rating: 3.2,
        description: 'Chicken quesadilla, avocado....',
        location: 'California',
        distance: '1 km',
        time: '10 min',
        imgSrc: '/images/vp-10.png',
    },
    {
        name: 'Grill Master\'s Cafe',
        rating: 4.3,
        description: 'Bread, Eggs, Butter, Fries...',
        location: 'New York',
        distance: '5 km',
        time: '40 min',
        imgSrc: '/images/vp-11.png',
    },
    {
        name: 'Cozy Cuppa Cafe',
        rating: 3.6,
        description: 'Cheesecake, waffles, Cakes,...',
        location: 'Dallas',
        distance: '4 km',
        time: '30 min',
        imgSrc: '/images/vp-12.png',
    },
    {
        name: 'Mocha Magic Cafe',
        rating: 3.2,
        description: 'Chinese, Momos, Dumplings,...',
        location: 'Seattle',
        distance: '1 km',
        time: '8 min',
        imgSrc: '/images/vp-13.png',
    },
    {
        name: 'Latte Lounge',
        rating: 3.6,
        description: 'Chicken goujons,....',
        location: 'Atlanta',
        distance: '3 km',
        time: '25 min',
        imgSrc: '/images/vp-14.png',
    },
    {
        name: 'The Burger Barn',
        rating: 3.8,
        description: 'Burger, Garlic Bread, Sandwich...',
        location: 'Chicago',
        distance: '2 km',
        time: '20 min',
        imgSrc: '/images/vp-15.png',
    },
    {
        name: 'Wing Master',
        rating: 3.2,
        description: 'Chicken quesadilla, avocado....',
        location: 'New York',
        distance: '2 km',
        time: '12 min',
        imgSrc: '/images/vp-16.png',
    },
];
function Menu() {
    return (
        <>
            <section className='bg-col'>
                <Container>
                    <div className='col-12 pt-120 d-flex flex-wrap'>
                        <div class="loader-line"></div>
                        <div className='menu-head col-12 d-flex flex-wrap'>
                            <div className='col-6'>
                                <h2>Featured Restaurants</h2>
                            </div>
                            <div className='col-6 d-flex flex-wrap justify-content-end'>
                                <Nav defaultActiveKey="/home">
                                    <Nav.Item>
                                        <Nav.Link href="/home">Active</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1"> Rating</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2"> Pure Vage</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3"> Cost</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className='col-12 d-flex pt-4 pb-120 flex-wrap'>
                        {restaurants.map((restaurant, index) => (
                            <div key={index} className='col-3 p-2'>
                                <Link to={`/restaurant/${index}`}>
                                    <Card style={{ width: '100%' }}>
                                        <div className='card-wraper'>
                                            <Card.Img
                                                variant="top"
                                                className='card-img img-fluid'
                                                src={restaurant.imgSrc}
                                                alt={restaurant.name}
                                            />
                                        </div>
                                        <Card.Body>
                                            <div className='col-12 d-flex flex-wrap'>
                                                <div className='col-10'>
                                                    <h5>{restaurant.name}</h5>
                                                </div>
                                                <div className='col-2 d-flex justify-content-end align-items-center'>
                                                    <i className="fa-solid fa-star px-2 text-success"></i>{restaurant.rating}
                                                </div>
                                            </div>
                                            <Card.Text>
                                                {restaurant.description}
                                            </Card.Text>
                                            <hr />
                                            <div className='col-12 d-flex flex-wrap'>
                                                <div className='col-5 d-flex align-items-center'>
                                                    <ul>
                                                        <li className='d-flex flex-wrap align-items-center'>
                                                            <i className="fa-solid fa-circle px-2"></i>{restaurant.location}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-7 d-flex align-items-center'>
                                                    <div className='menu-icon'>
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                    <span className='ps-1'>{restaurant.distance}</span>
                                                    <span className='px-1'>|</span>
                                                    <div className='menu-icon'>
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                    <span className='ps-1'>{restaurant.time}</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </section >
        </>
    )
}

export default Menu