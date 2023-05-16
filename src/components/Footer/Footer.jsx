import React from 'react';
function Footer() {
  return <>
  <footer>
  <h1 className=' p-4 text-center border-bottom'>-shop</h1>
<div className="container">
  <div className="row">
    <div className="col-md-6 p-5">
      <h2>Follow Us</h2>
      <p>Social Media channels :</p>
      <ul className=' d-flex w-50 justify-content-around list-unstyled'>
        <li className=' social-list'><i class="fa-brands fa-facebook"></i></li>
        <li className=' social-list'><i class="fa-brands fa-instagram"></i></li>
        <li className=' social-list'><i class="fa-brands fa-twitter"></i></li>
        <li className=' social-list'><i class="fa-brands fa-linkedin"></i></li>
      </ul>
    </div>
    <div className="col-md-6 p-5">
      <h2>Contact Us</h2>
      <input className=' form-control' type="text"  placeholder=' Send Message' />

      <ul className=' list-unstyled p-4'>
        <li className='  p-2'><i class="fa-solid fa-phone me-1"></i>  +20-01009424961</li>
        <li  className='  p-2'><i class="fa-solid fa-location-dot me-1"></i>  10-Burhan-street,Helwan-Cairo</li>
        <li  className='  p-2'><i class="fa-solid fa-envelope me-1"></i>  abdelrahmanmahmoud4456@gmail.com</li>
      </ul>
    </div>
  </div>
</div>
<p className=' text-center text-muted '>© Copyright <span className=' fw-bolder'>E-shop</span>  All Rights Reserved</p>
  </footer>
 
  </>
}

export default Footer;