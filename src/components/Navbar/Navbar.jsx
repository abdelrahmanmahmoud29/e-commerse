import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import { counterContext } from '../../Context/CartContext';
function Navbar({userData}) {
  let{deleteUserToken}=useContext(counterContext)
  return <>

  <nav className=' bg-black text-white d-flex'>
<div className="nav-container d-flex p-3 ">
 <h2 className='m-0 p-0'>-shop</h2>
 <ul className='responsive  d-flex  align-items-center w-25  m-0 p-0  justify-content-around ms-5   list-unstyled'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="Category">Categories</Link></li>
    <li><Link to="cart">Cart</Link></li>
  </ul>
  <div class="dropdown w-50 d-none">
  <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-solid fa-bars"></i>
  </button>
  <ul class="dropdown-menu ">
  <li ><Link className='text-black' to="/">Home</Link></li>
    <li><Link className='text-black' to="Category">Categories</Link></li>
    <li><Link className='text-black' to="cart">Cart</Link></li>
  </ul>
</div>
 <div className="responsive search w-50 d-flex justify-content-center align-items-center ms-5 ">
 <i class="fa-solid fa-magnifying-glass m-0 p-0"></i> <input className=' w-75 rounded-4 border-0 ms-1 p-1 ps-2' type="text" placeholder='search'  />
 </div>
</div>
<div className='responsive log-list d-flex m-0 p-0'>
<ul className=' d-flex justify-content-around m-0 p-0 w-100  align-items-center list-unstyled '>
  {localStorage !== null?<li onClick={deleteUserToken}>< Link to='logout'>Logout</Link></li>:<>
  <li><Link to='login'>Login</Link></li>
  <li><Link to='Register'>Register</Link></li>
  </>
  
  }
  
</ul>
</div>
  </nav>
</>}

export default Navbar;