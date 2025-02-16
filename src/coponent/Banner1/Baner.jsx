import "swiper/css";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Menu from "../Menu-section/Menu";
import Brands from "../Brands/Brands";

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Baner() {
  let navigate = useNavigate(); 

  useEffect(() => {
    const visited = localStorage.getItem('visited');

    if (!visited) {
      localStorage.setItem('visited', 'true');
      navigate('/singin');
    }
  }, [navigate]);

  return (
    <>
      <section className='bg-img'>
        <Container>
          <Row>
            <div className='home-baner col-12 d-flex flex-wrap justify-content-center'>
              <div className='col-7 d-flex flex-wrap text-white align-items-center'>
                <div className='col-12 pt-5'>
                  <h2 className='pt-5'>Discover restaurants that food deliver near you</h2>
                </div>
                <div className='d-flex flex-wrap justify-content-center col-12 pb-5'>
                  <div className='col-9 px-2 input-icon '>
                    <Form.Control type="email" placeholder="      Search For Resturent" className='px-3 rounded-pill' />
                    <i class="fa-solid fa-magnifying-glass icon px-3"></i>
                  </div>
                  <div className='col-3 px-2'>
                    <Button variant="outline-secondary" className='bt-2 rounded-pill col-2' id="button-addon2">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              <div className='col-5 d-flex  align-items-center'>
                <img src=".\images\home-vector.png" alt="bike-img" />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <Swiper watchSlidesProgress={true} slidesPerView={7} loop={true} className="mySwiper p-3">
          {[
            { src: "./images/p-1.png", alt: "pizza", label: "Pizza" },
            { src: "./images/p-2.png", alt: "chicken", label: "Chicken" },
            { src: "./images/p-3.png", alt: "burger", label: "Burger" },
            { src: "./images/p-5.png", alt: "fries", label: "Fries" },
            { src: "./images/p-6.png", alt: "burrito", label: "Burrito" },
            { src: "./images/p-7.png", alt: "taco", label: "Taco" },
            { src: "./images/p-8.png", alt: "muffin", label: "Muffin" },
            { src: "./images/p-9.png", alt: "meat", label: "Meat" },
            { src: "./images/p-10.png", alt: "paneer", label: "Paneer" },
            { src: "./images/p-11.png", alt: "hotdog", label: "Hotdog" },
            { src: "./images/p-12.png", alt: "donuts", label: "Donuts" },
            { src: "./images/p-13.png", alt: "coffee", label: "Coffee" },
            { src: "./images/p-14.png", alt: "sandwich", label: "Sandwich" },
            { src: "./images/p-15.png", alt: "noodle", label: "Noodle" },
            { src: "./images/p-16.png", alt: "pasta", label: "Pasta" },
            { src: "./images/p-17.png", alt: "maggi", label: "Maggi" },
            { src: "./images/p-18.png", alt: "momos", label: "Momos" },
            { src: "./images/p-19.png", alt: "salad", label: "Salad" },
            { src: "./images/p-20.png", alt: "biryani", label: "Biryani" },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <Link to="#">
                <div className="slider-1 p-2">
                  <img src={item.src} alt={item.alt} />
                  <h4>{item.label}</h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Container>
        <div className="heading-baner-2 pt-5 col-12">
          <div className="loader-line"></div>
          <h2>Today’s Deal</h2>
          <p>Take advantage of our latest offers.</p>
          <div className="col-12 pt-5">
            <Swiper watchSlidesProgress={true} slidesPerView={4} loop={true} className="mySwiper swiper-2">
              {[
                { src: "./images/banner1.jpg", alt: "banner 1" },
                { src: "./images/banner2.jpg", alt: "banner 2" },
                { src: "./images/banner3.jpg", alt: "banner 3" },
                { src: "./images/banner4.jpg", alt: "banner 4" },
                { src: "./images/banner5.jpg", alt: "banner 5" },
              ].map((item, index) => (
                <SwiperSlide key={index} className="swiper-slider-2">
                  <Link to="#">
                    <div className="slider-2 p-2">
                      <img src={item.src} alt={item.alt} />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>

      <Menu />

      <Brands />

      <section className="bg-mobile-baner">
        <Container>
          <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-4 position-relative">
              <img src="\images\service-phone.png " className="img-fluid" />
            </div>
            <div className="col-8 p-5">
              <h1 className="text-white">Zomo App : Online & Mobile Ordering</h1>
              <p className="text-white">Get the app for free and place takeout orders online whenever you want.</p>
              <div className="d-flex flex-wrap align-items-center pt-5">
                <Link className="pe-3" to={"https://www.apple.com/in/app-store/"}><img src=".\images\app-store.svg" className="img-fluid" /></Link><Link to={"https://play.google.com/store/apps"}><img src=".\images\google-play.svg" className="img-fluid" /></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </>
  )
}

export default Baner