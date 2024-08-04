
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Otp() {
    return (
        <>
            <section>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>One Time Password</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>OTP</Link></p>
                    </div>
                </div>
                <Container>
                    <div className='d-flex otp flex-wrap justify-content-center align-items-center error p-5'>
                        <div className='col-6 '>
                            <h2>OTP</h2>
                            <p>We have sent a verification code to</p>
                            <h5>+1 (692)52 - 95555</h5>
                            <Form className='py-3 px-3 d-flex flex-wrap'>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="0" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="0" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="0" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="0" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="0" />
                                    </Col>
                                </Row>
                            </Form>
                            <button className='bt1 rounded py-3 col-12'> <Link to={"/"} className='text-white'>CONTINUE</Link></button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Otp