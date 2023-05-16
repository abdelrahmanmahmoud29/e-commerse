import React, { useState } from 'react';
import { useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
 function Login({saveUserData}) {
  const [isloading, setisloading] = useState(false);
  const [MessageError, setMessageError] = useState('');
  let navigate= useNavigate();
  async function handleLogin(values){
    setisloading(true);
 let {data}= await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values).catch((err)=>{
  setisloading(false);
  setMessageError( `${err.response.data.errors.param}:${err.response.data.errors.msg}`)
 })
 console.log(data.token);
 if(data.message === 'success'){
  localStorage.setItem('userToken', data.token)
 saveUserData();
 setisloading(false);
 
  navigate('/')
 }
  }
  let validationSchema=yup.object({
email:yup.string().required('email is Required').email('email is invalid'),
password:yup.string().required('password is Required').matches(/^[A-Z][a-z0-9]{5,10}$/,'Password must start with uppercase... and min length is 5 letters'),
  })
  let formik= useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema, 
    onSubmit:handleLogin
  })
  return <>
 <div className='log-res w-25 mx-auto py-2'>
<h2>Login now</h2>
{MessageError?<div className="alert alert-danger">{MessageError}</div>:null}

<form onSubmit={formik.handleSubmit}>
 
   <label htmlFor="email">Email</label>
  <input className=' form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} type="email" email="email" id="email" />
 {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}
  <label htmlFor="password">Password</label>
  <input className=' form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password} type="password" password="password" id="password" />
  {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}
  {isloading?<button  className='sub-btn btn mt-2' type='button'><i className='fas fa-spinner fa-spin'></i></button>:
<button disabled={!(formik.isValid&& formik.dirty)} className='sub-btn pt-2 pb-2 ps-4 pe-4 rounded-2 mt-2 w-100' type='submit'>Login</button>
}


</form>


 </div>
  </>
}

export default Login;