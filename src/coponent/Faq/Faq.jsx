import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
function Faq() {
    return (
        <>
            <section>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>FAQ</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>FAQ</Link></p>
                    </div>
                </div>
                <Container>
                    <div className='d-flex col-12 faq flex-wrap justify-content-center align-items-center error p-5'>
                        <div className='col-12 d-flex flex-wrap justify-content-center align-items-center'>

                            <h1 className='pt-3'>Frequently Asked Questions</h1>
                        </div>
                        <div className='d-flex col-4 flex-wrap justify-content-center align-items-center'>
                            <img src="\images\faq.svg" alt="Empty-cart" />
                        </div>
                        <div className='col-8 p-3'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item className='m-3' eventKey="0">
                                    <Accordion.Header>
                                        I want to track my order
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <p>
                                                To track your order, you will need to have the tracking
                                                number or order ID provided by the seller or shipping
                                                carrier. Once you have this information, you can usually
                                                track your order online by visiting the carrier's website
                                                and entering the tracking number or order ID in the
                                                designated tracking field.
                                            </p>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className='m-3' eventKey="1">
                                    <Accordion.Header>
                                        I want to manage my order
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li className='m-2'>

                                                Check your order confirmation email or account: This
                                                should contain information about your order, including
                                                the expected delivery date, tracking number (if
                                                applicable), and contact information for the seller.

                                            </li>
                                            <li className='m-2'>

                                                Contact the seller: If you have any questions about your
                                                order or need to make changes, the best way to do so is
                                                to contact the seller directly. You can typically find
                                                their contact information on their website or in your
                                                order confirmation email.

                                            </li>
                                            <li className='m-2'>

                                                Check the order status: Many online retailers provide a
                                                way for you to check the status of your order online.
                                                This can give you information about when your order was
                                                shipped, when it's expected to arrive, and any tracking
                                                information.

                                            </li>
                                            <li className='m-2'>

                                                Make changes to your order: Depending on the seller's
                                                policies, you may be able to make changes to your order,
                                                such as adding or removing items, changing the shipping
                                                address, or canceling the order altogether. Contact the
                                                seller to see if this is possible.

                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className='m-3' eventKey="2">
                                    <Accordion.Header>
                                        I did not receive Instant Cashback
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <p>
                                                I'm sorry to hear that you did not receive an instant cashback. To help you with this issue, I need more information.
                                            </p>
                                            <li className='m-3'>
                                                What type of purchase did you make?
                                            </li>
                                            <li className='m-3'>
                                                From which website or store did you make the purchase?
                                            </li>
                                            <li className='m-3'>
                                                Did you receive any confirmation or receipt for your purchase?
                                            </li>
                                            <li className='m-3'>
                                                Did you check the terms and conditions of the cashback offer before making the purchase?
                                            </li>
                                            <li className='m-3'>
                                                What type of purchase did you make?Have you contacted the website or store's customer support regarding the issue?
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className='m-3' eventKey="3">
                                    <Accordion.Header>
                                        I am unable to pay using wallet
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <p>
                                                I'm sorry to hear that you did not receive an instant cashback. To help you with this issue, I need more information.
                                            </p>
                                            <li className='m-3'>
                                                What type of purchase did you make?
                                            </li>
                                            <li className='m-3'>
                                                From which website or store did you make the purchase?
                                            </li>
                                            <li className='m-3'>
                                                Did you receive any confirmation or receipt for your purchase?
                                            </li>
                                            <li className='m-3'>
                                                Did you check the terms and conditions of the cashback offer before making the purchase?
                                            </li>
                                            <li className='m-3'>
                                                What type of purchase did you make?Have you contacted the website or store's customer support regarding the issue?
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className='m-3' eventKey="4">
                                    <Accordion.Header>
                                        I want help with returns &amp; refunds
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <p>
                                                I'm sorry to hear that you did not receive an instant cashback. To help you with this issue, I need more information.
                                            </p>
                                            <li className='m-3'>
                                                What type of purchase did you make?
                                            </li>
                                            <li className='m-3'>
                                                From which website or store did you make the purchase?
                                            </li>
                                            <li className='m-3'>
                                                Did you receive any confirmation or receipt for your purchase?
                                            </li>
                                            <li className='m-3'>
                                                Did you check the terms and conditions of the cashback offer before making the purchase?
                                            </li>
                                            <li className='m-3'>
                                                What type of purchase did you make?Have you contacted the website or store's customer support regarding the issue?
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Faq