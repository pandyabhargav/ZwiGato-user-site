import React from 'react'
import Menu from '../Menu-section/Menu'
import { Link } from 'react-router-dom'

function Restorantlisting() {
    return (
        <>
            <section>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>Restaurant Listing</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>Restaurant Listing</Link></p>
                    </div>
                </div>
                <Menu />
            </section>
        </>
    )
}

export default Restorantlisting