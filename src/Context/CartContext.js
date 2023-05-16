import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let counterContext=createContext()


export function CounterContextProvider(props){

const[cartId,setCartId]=useState(null)

async function getCart(){

    let response=await getLoggedUserCart()
    if(response?.data?.status==='success'){
        setCartId(response.data.data._id)
    }
}



useEffect(()=>{

    getCart()

},[])



let headers= {
    token:localStorage.getItem('userToken')
}

function addToCart(productId) {
    return axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
    {
        productId
    },
    {
        headers:headers
    }
    ).then((response)=>response)
    .catch((error)=>error)   
}
function getLoggedUserCart(productId) {
    return axios.get(`https://route-ecommerce.onrender.com/api/v1/cart`,
    {
        headers:headers
    }
    ).then((response)=>response)
    .catch((error)=>error)   
}

function removeItem(productId) {
    return axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {
        headers:headers
    }
    ).then((response)=>response)
    .catch((error)=>error)   
}

function updateCartItem(productId,count) {
    return axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {
        count:count
    },
    {
        headers:headers
    }
    ).then((response)=>response)
    .catch((error)=>error)   
}
function onlinePayment(cartId,shippingAddress) {
    return axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {
        shippingAddress:shippingAddress
    },
    {
        headers:headers
    }
    ).then((response)=>response)
    .catch((error)=>error)   
}
function deleteUserToken(){
   localStorage.clear()
  }



return <counterContext.Provider value={{cartId,addToCart,getLoggedUserCart,removeItem,updateCartItem,onlinePayment,deleteUserToken}}>
     {props.children}
</counterContext.Provider> 
}