import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CategoryDetails() {
  const[CategoryDetails,setCategoryDetails]=useState(null)
  let params=useParams()
  async function getCategoryDetails(id){
    let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`)
    setCategoryDetails(data.data)
    console.log(data.data.image);
      }
      
      
      useEffect(()=>{
    
        getCategoryDetails(params.id)
    
      },[])

 return <>
 {CategoryDetails?<div className=' text-center w-25 m-auto'>
      <img className=' w-100' src={CategoryDetails.image} alt="" />
      <h2>{CategoryDetails.name}</h2>
    </div>:null}
    
    </>
 
}

export default CategoryDetails;