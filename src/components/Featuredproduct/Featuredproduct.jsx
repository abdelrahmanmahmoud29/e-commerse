import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
import { counterContext } from '../../Context/CartContext';


function Featuredproduct() {
  const [products, setProducts] = useState([]);
  const[isLoading,setIsLoading]=useState(false)
 async function getProducts(){
  setIsLoading(true)
let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/products`)
setProducts(data.data)
console.log(data.data);
setIsLoading(false)
  }

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
  useEffect(()=>{
    getProducts()
  },[])
  return <>
  <div className="headear">
  <h2> Hot Products...</h2>
  <h3> Hot Products...</h3>
  </div>
  <div className='responsive-header  d-none'>
  <h2> Hot Products...</h2>
  </div>
  {isLoading?<div className=' d-flex justify-content-center align-items-center'><i class="fa-solid fa-spin  fa-3x text-success fa-spinner"></i></div>:
  <div className="products row gy-4 rounded-2 ">
  {products.slice(2,).map((product)=>
  <div key={product._id} className="products-dv col-md-3 text-center">
    <div className="item">
     <Link to={`/productsdetails/${product._id}`}>
    <img className=' w-75 rounded-4' src={product.imageCover} alt="" />
    <h2 className='h6 mt-1'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
    <div className=" d-flex justify-content-around">
      <span className='text-muted'>{product.price} EGP</span>
      <span><i className='fas fa-star text-warning'></i>
      {product.ratingsAverage}
      </span>
    </div>
    </Link>
    <button onClick={()=>addProduct(product._id)} className='add-btn  w-75'><i class="fa-solid fa-plus "></i>Add</button>
    </div>
  </div>
  )}
</div>
  }
  
  </>
}

export default Featuredproduct;