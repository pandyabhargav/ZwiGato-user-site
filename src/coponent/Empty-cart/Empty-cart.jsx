import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Emptycart() {
    return (
        <>
            <section>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>Cart</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>Cart</Link></p>
                    </div>
                </div>
                <Container>
                    <div className='d-flex col-12 cart flex-wrap justify-content-center align-items-center error p-5'>
                        <div className='d-flex col-12 flex-wrap justify-content-center align-items-center'>
                            <img src="\images\empty-cart.svg" alt="Empty-cart" />
                        </div>
                        <div className='text-center'>
                            <h2 className='pt-3'>It’s empty in your cart</h2>
                            <p className='text-center pb-3'>To browse more restaurants, visit the main page.</p>
                            <button className='bt1 px-4 py-2'> <Link to={"/"} className='text-white'>SEE RESTURENT NEAR YOU</Link></button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Emptycart