import React from 'react'
import { Link } from 'react-router-dom'
function Whislesheet() {
  return (
    <>
        <section>
                <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                    <div className='singup pt-50  col-12 text-center'>
                        <h2 className='pt-5'>Wishlist</h2>
                        <p className='pb-5 text-white'><Link className='px-1'><i class="fa-sharp fa-solid fa-house"></i> Home  </Link>/<Link className='px-1'>Wishlist</Link></p>
                    </div>
                </div>
                <Menu />
            </section>
    </>
  )
}

export default Whislesheet