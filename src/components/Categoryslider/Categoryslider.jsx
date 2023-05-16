// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";

// function Categoryslider() {
//   const [categories, setCategories] = useState([]);
//   async function getCategories(){
//  let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
//  setCategories(data.data)
//  console.log(data.data);
//    }
//    useEffect(()=>{
//     getCategories()
 
//    },[])
//   let settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1
//   };
//   return <>
//  <Slider {...settings}>
//   {categories.map((category)=><div className=' bg-black  pb-5' key={category._id}>
//     <img className='category-slider mt-5  rounded-5 w-75  ' src={category.image} alt="" />
//     <h2 className='h6'>{category.name}</h2>
//   </div>
 
  
//   )}
//  </Slider>
//   </>
// }

// export default Categoryslider;