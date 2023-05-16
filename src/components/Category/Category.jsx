import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Category() {
  const [Categories, setCategories] = useState([]);
  const[isLoading,setIsLoading]=useState(false)
  async function getProducts(){
    setIsLoading(true)
    let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
    setCategories(data.data)
    console.log(data.data);
    setIsLoading(false)
      }
      useEffect(()=>{
        getProducts()
      },[])
  return <>
  {isLoading?<div className=' d-flex justify-content-center align-items-center'><i class="fa-solid fa-spin  fa-3x text-success fa-spinner"></i></div>:
    <div className="container mt-5 pt-5">
<div className="products row gy-4 rounded-2 ">
    {Categories.map((category)=>
  <div key={category._id} className="products-dv col-md-3 text-center">
  <div className="item">
  <Link  to={`/CategoryDetails/${category._id}`}>
  <img className=' w-75 rounded-4' src={category.image} alt="" />
  <h2>{category.name}</h2>
  </Link>
  </div>
  </div>

    )}
 </div>
  </div>
  }



 
  </>
}
export default Category;
