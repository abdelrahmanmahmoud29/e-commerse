import React, { useContext, useEffect, useState } from 'react';
import { counterContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
 const[cartDetails,setCartDetails]=useState(null)
 


  let {getLoggedUserCart,removeItem,updateCartItem}=useContext(counterContext)
  async function GetCart(){
    let response=await getLoggedUserCart()
    if (response?.data?.status==="success") {
      console.log(response);
      setCartDetails(response.data.data);
    }
  
  }
  async function deleteItem(id){
    let response=await removeItem(id)
    console.log(response);
    if (response?.data?.status==="success") {
      setCartDetails(response.data.data);
    }
  }

  async function updateCart(id,count){
    let response=await updateCartItem(id,count)
    console.log(response);
      setCartDetails(response.data.data);
   
  }
  
  useEffect(()=>{
GetCart()

  },[])
  return <>
 {cartDetails?<div className="container"> <div className=' cartbg p-4 my-4 rounded-4'>
  <h2 className=' p-1'>Shop Cart:</h2>
  <h5 className='totalCartPrice pb-5 '>Total Cart Price:   <span className=' fw-bolde text-black'>{cartDetails.totalCartPrice}EGP</span></h5>
  {cartDetails?.products.map((product)=><div key={product.product._id} className=' row border-bottom '>
    <div className="col-md-2">
      <img className='w-100 p-2 rounded-5' src={product.product.imageCover} alt="" />
    </div>
    <div className="col-md-10  d-flex justify-content-between">
<div>
<h4 className='   mt-5 pt-3'>{product.product.title.split(' ').slice(0,2).join(' ')}</h4>
<h2 className=' text-muted h5'>Price : <span className=' span-price'>{product.price}EGP</span></h2>
<h6><i className='fas fa-star text-warning'></i>{product.product.ratingsAverage}</h6>
<button onClick={()=> deleteItem(product.product._id)} className='sub-btn remove pt-2 pb-2 ps-4 pe-4 rounded-2'><i class="fa-solid fa-trash-can pe-1"></i>Remove</button>
</div>
<div className=' d-flex  flex-column align-content-around  justify-content-center'>
<button onClick={()=>updateCart(product.product._id,product.count+1)} className='updateBtns  bg-transparent d-flex justify-content-center align-items-center rounded-circle'><i class="fa-solid fa-plus"></i></button>
<p className=' h5'>{product.count}</p>
<button  onClick={()=>updateCart(product.product._id,product.count-1)} className=' updateBtns rounded-circle bg-transparent d-flex justify-content-center align-items-center'><i class="fa-solid fa-minus"></i></button>
</div>
    </div>
  </div>)}
 </div>
 <button className=' w-100 checkout rounded-3 bg-success pt-2 pb-2 ps-4 pe-4'>
<Link to={'/checkout'} >
CheckOut
</Link>

 </button>
 
 </div>:null}
  </>
}

export default Cart;



 