import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <section>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>404 Not Found</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>404</Link></p>
                    </div>
                </div>
                <Container>
                    <div className='d-flex flex-wrap justify-content-center align-items-center error p-5'>
                        <div className='d-flex col-12 flex-wrap justify-content-center align-items-center'>
                            <img src="\images\404.png" alt="404" />
                        </div>
                        <div className='text-center'>
                            <p className='p-4 text-center'>The page you are looking for could not be found. The link to this address may be outdated or we may have moved the since you last bookmarked it.</p>
                            <button className='bt1 px-4 py-2 '> <Link to={"/"} className='text-white'>Back to Home</Link></button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Error