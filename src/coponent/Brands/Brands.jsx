import "swiper/css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Brands() {
    return (
        <>
            <Container>
                <div className="heading-baner-3 pt-120 pb-5 col-12">
                    <div className="loader-line"></div>
                    <h2>Brand For You</h2>
                    <p>Browse our top brands here to discover different food cuisines.</p>
                    <div className="col-12 pt-5">
                        <Swiper watchSlidesProgress={true} slidesPerView={8} loop={true} className="mySwiper swiper-2">
                            {[
                                { to: "/brand/la-pinoz", src: "./images/brand1.png", alt: "La Pino'z", name: "La Pino'z" },
                                { to: "/brand/mcd", src: "./images/brand2.png", alt: "Mc'd", name: "Mc'd" },
                                { to: "/brand/starbucks", src: "./images/brand3.png", alt: "Starbucks", name: "Starbucks" },
                                { to: "/brand/pizza-hut", src: "./images/brand4.png", alt: "Pizza Hut", name: "Pizza Hut" },
                                { to: "/brand/wendys", src: "./images/brand5.png", alt: "Wendy's", name: "Wendy's" },
                                { to: "/brand/burger-king", src: "./images/brand6.png", alt: "Burger King", name: "Burger King" },
                                { to: "/brand/subway", src: "./images/brand7.png", alt: "Subway", name: "Subway" },
                                { to: "/brand/dominos", src: "./images/brand8.png", alt: "Domino's", name: "Domino's" },
                                { to: "/brand/taco-bell", src: "./images/brand9.png", alt: "Taco Bell", name: "Taco Bell" },
                                { to: "/brand/chipotle", src: "./images/brand10.png", alt: "Chipotle", name: "Chipotle" },
                                { to: "/brand/kfc", src: "./images/brand11.png", alt: "KFC", name: "KFC" },
                            ].map((brand, index) => (
                                <SwiperSlide key={index} className="swiper-slider-3">
                                    <Link to={brand.to}>
                                        <div className="slider-3 p-2">
                                            <img src={brand.src} alt={brand.alt} />
                                            <p>{brand.name}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Container>

            <section>
                <Container>
                    <div className="col-12 heading-baner-3 d-flex flex-wrap">
                        <div className="loader-line"></div>
                        <div className="menu-head col-12 d-flex flex-wrap">
                            <div className="col-6">
                                <h2>Popular Restaurants</h2>
                                <p>Find nearby popular restaurants.</p>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="col-12 d-flex pt-4 pb-120 flex-wrap">
                        {[
                            { name: 'Poultry Palace', rating: 3.9, description: 'Chicken quesadilla, avocado....', location: 'New Jersey', distance: '3 km', time: '25 min', imgSrc: '/images/vp-1.png' },
                            { name: 'Ribeye Junction', rating: 3.2, description: 'Chicken quesadilla, avocado....', location: 'California', distance: '1 km', time: '10 min', imgSrc: '/images/vp-2.png' },
                            { name: 'Grill Master\'s Cafe', rating: 4.3, description: 'Bread, Eggs, Butter, Fries...', location: 'New York', distance: '5 km', time: '40 min', imgSrc: '/images/vp-3.png' },
                            { name: 'Cozy Cuppa Cafe', rating: 3.6, description: 'Cheesecake, waffles, Cakes,...', location: 'Dallas', distance: '4 km', time: '30 min', imgSrc: '/images/vp-4.png' },
                            { name: 'Mocha Magic Cafe', rating: 3.2, description: 'Chinese, Momos, Dumplings,...', location: 'Seattle', distance: '1 km', time: '8 min', imgSrc: '/images/vp-5.png' },
                            { name: 'Latte Lounge', rating: 3.6, description: 'Chicken goujons,....', location: 'Atlanta', distance: '3 km', time: '25 min', imgSrc: '/images/vp-6.png' },
                            { name: 'The Burger Barn', rating: 3.8, description: 'Burger, Garlic Bread, Sandwich...', location: 'Chicago', distance: '2 km', time: '20 min', imgSrc: '/images/vp-7.png' },
                            { name: 'Wing Master', rating: 3.2, description: 'Chicken quesadilla, avocado....', location: 'New York', distance: '2 km', time: '12 min', imgSrc: '/images/vp-8.png' }
                        ].map((restaurant, index) => (
                            <div key={index} className="col-3 p-2">
                                <Link to={`/restaurant/${index}`}>
                                    <Card style={{ width: '100%' }}>
                                        <div className='card-wraper'>
                                            <Link >
                                                <Card.Img variant="top" className="card-img img-fluid" src={restaurant.imgSrc} alt={restaurant.name} />
                                            </Link>
                                        </div>

                                        <Card.Body>
                                            <div className="col-12 d-flex flex-wrap">
                                                <div className="col-10">
                                                    <h5>{restaurant.name}</h5>
                                                </div>
                                                <div className="col-2 d-flex justify-content-end align-items-center">
                                                    <i className="fa-solid fa-star px-2 text-success"></i>{restaurant.rating}
                                                </div>
                                            </div>
                                            <Card.Text>{restaurant.description}</Card.Text>
                                            <hr />
                                            <div className="col-12 d-flex flex-wrap">
                                                <div className="col-5 d-flex align-items-center">
                                                    <ul>
                                                        <li className="d-flex flex-wrap align-items-center">
                                                            <i className="fa-solid fa-circle px-2"></i>{restaurant.location}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-7 d-flex align-items-center">
                                                    <div className="menu-icon">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                    <span className="ps-1">{restaurant.distance}</span>
                                                    <span className="px-1">|</span>
                                                    <div className="menu-icon">
                                                        <i className="fa-solid fa-clock"></i>
                                                    </div>
                                                    <span className="ps-1">{restaurant.time}</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Brands;
