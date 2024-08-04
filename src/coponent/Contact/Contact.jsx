import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Contact() {
  return (
    <>
      <section className='bg-col'>
        <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
          <div className='singup pt-50  col-12 text-center'>
            <h2 className='pt-5'>Contact</h2>
            <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>Contact</Link></p>
          </div>
        </div>
        <Container>
          <div className='col-12 heading-baner-3 py-5 d-flex flex-wrap'>
            <div class="loader-line"></div>
            <div className='menu-head col-12 d-flex flex-wrap'>
              <div className='col-6'>
                <h2>Inform us of Yourself</h2>
                <p>Contact us if you have any queries or merely want to say hi.</p>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className='col-12 flex-wrap icons-contact d-flex justify-content-start align-items-center'>
          <div className='col-3 d-flex justify-content-start pe-2 align-items-center'>
          <div className='d-flex col-12 bg-whites justify-content-start p-3 align-items-center'>
                <div className='bg-contact-icon rounded me-3'>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h6>Phone</h6>
                  <p className='col-12'>(+91) 618 190 496</p>
                </div>
              </div>
            </div>
            <div className='col-3 d-flex justify-content-start pe-2 align-items-center'>
          <div className='d-flex col-12 bg-whites justify-content-start p-3 align-items-center'>
                <div className='bg-contact-icon rounded me-3'>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h6>Email</h6>
                  <p className='col-12'>geweto9420@chokxus.com</p>
                </div>
              </div>
            </div>
            <div className='col-3 d-flex justify-content-start pe-2 align-items-center'>
            <div className='d-flex col-12 bg-whites justify-content-start p-3 align-items-center'>
                <div className='bg-contact-icon rounded me-3'>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h6>London Office</h6>
                  <p className='col-12'>Cruce Casa de Postas 29</p>
                </div>
              </div>
            </div>
            <div className='col-3 d-flex justify-content-start pe-2 align-items-center'>
          <div className='d-flex col-12 bg-whites justify-content-start p-3 align-items-center'>
                <div className='bg-contact-icon rounded me-3'>
                  <i class="fa-solid fa-building"></i>
                </div>
                <div>
                  <h6>Bournemouth Office</h6>
                  <p className='col-12'>Visitación de la Encina 22</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className='col-12 pt-3 pb-5 d-flex flex-wrap'>
            <Form className='col-8 p-5 bg-white'>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Fist Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your fist Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your last Name" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="Number" placeholder="Number" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>How Can We Help You?</Form.Label>
                <Form.Control placeholder="Hi there i would like to" />
              </Form.Group>
              <hr />
              <Button className='bt1 py-2 mt-2 px-4' type="submit">
                Submit
              </Button>
            </Form>
            <div className='col-4 ps-4'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d561691.6190220426!2d69.84462207867566!3d-49.1578872734975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720611122375!5m2!1sen!2sin"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>

      </section>
    </>
  )
}

export default Contact