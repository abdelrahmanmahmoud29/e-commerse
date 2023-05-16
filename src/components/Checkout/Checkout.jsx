import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { counterContext } from '../../Context/CartContext';
function Checkout() {
  let{cartId,onlinePayment}=useContext(counterContext)


  
  async function handleSubmit(values){
  

let response= await onlinePayment(cartId,values)
console.log(response);
if(response?.data?.status==='success')
  window.location.href=response.data.session.url
  }
  let formik=useFormik({
initialValues:{
  details:'',
  city:'',
  phone:''
},
onSubmit:handleSubmit


  })
  return <>
<form onSubmit={formik.handleSubmit}>
 
<div className=' w-25 m-auto p-4'>
<label htmlFor="details">details</label>
<input className=' form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="text" id="details" placeholder='details' />
<label htmlFor="city">city</label>
<input className=' form-control mb-2' onChange={formik.handleChange} value={formik.values.city} type="text"  id="city" placeholder='city' />
<label htmlFor="phone">phone</label>
<input className=' form-control mb-2' onChange={formik.handleChange} value={formik.values.phone} type="tel"  id="phone" placeholder='phone' />
<button disabled={!(formik.dirty)} className='sub-btn pt-2 pb-2 ps-4 pe-4 rounded-2 mt-2 w-100' type='submit'>pay</button>

</div>
</form>

  </>
}

export default Checkout;