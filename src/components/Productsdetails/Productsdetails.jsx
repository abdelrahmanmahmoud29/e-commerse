import axios from 'axios';
import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast'
import Slider from "react-slick";
import { counterContext } from '../../Context/CartContext';

function Productsdetails() {
  const[productsDetails,setProductsDetails]=useState(null)
  const[isLoading,setIsLoading]=useState(false)
  
  let params=useParams()

  let{addToCart}=useContext(counterContext)

  async function addProduct(productId){
   
 let response= await addToCart(productId);
 if (response?.data?.status==="success") {
  toast.success(response.data.message , {className:'border-success border'})
 }
 else{
  toast.error("Error")

 }
 console.log(response);

   }



  async function getproductsDetails(id){
setIsLoading(true)
let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
setProductsDetails(data.data)
setIsLoading(false)
  } 
  useEffect(()=>{

    getproductsDetails(params.id)

  },[])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:2000,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return <>
   {isLoading?<div className=' d-flex justify-content-center align-items-center'><i class="fa-solid fa-spin  fa-3x text-success fa-spinner"></i></div>:
   <div className="container">
   <div className="row align-items-center py-3">
      <div className="col-md-4">
      <Slider {...settings}>
    {productsDetails?.images.map((imag)=>
    <img src={imag} alt="" />
    )}
    </Slider>
  {/* <img className='w-100  rounded-3' src={productsDetails?.imageCover} alt="" /> */}
      </div>
      <div className="col-md-8">
  <h2>{productsDetails?.title}</h2>
  <p className=' text-muted'>{productsDetails?.description}</p>
  <div className=" d-flex justify-content-between pb-3">
          <span className='text-muted'>{productsDetails?.price} EGP</span>
          <span><i className='fas fa-star text-warning'></i>
          {productsDetails?.ratingsAverage}
          </span>
        </div>
        <button onClick={()=>addProduct(productsDetails._id)} className=' add-btn2 w-100'><i class="fa-solid fa-plus"></i>Add</button>
      </div>
    </div>
   </div>
   }
 
  </>
}

export default Productsdetails;