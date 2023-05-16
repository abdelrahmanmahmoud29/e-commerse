import React, { useState } from 'react';
import { useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
 function Register() {
  const [isloading, setisloading] = useState(false);
  const [MessageError, setMessageError] = useState('');
  let navigate= useNavigate();
  async function handleRegister(values){
    setisloading(true);
 let {data}= await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,values).catch((err)=>{
  setMessageError(`${err.response.data.errors.param}:${err.response.data.errors.msg}`)
  console.log();
  console.log(err.response.data.errors.params);
 })
 console.log(data);
 if(data.message === 'success'){
  setisloading(false);
  navigate('/login')
 }
  }
  let validationSchema=yup.object({
name:yup.string().required('Name is Required').min(3,'Name minlength is 3').max(15,'Name maxlength is 15'),
email:yup.string().required('email is Required').email('email is invalid'),
password:yup.string().required('password is Required').matches(/^[A-Z][a-z0-9]{5,10}$/,'Password must start with uppercase... and min length is 5 letters'),
rePassword:yup.string().required('rePassword is Required').oneOf([yup.ref('password')],'passsword and repassword dosent match'),
phone:yup.string().required('phone is Required').matches(/^01[0125][0-9]{8}$/,'phone number must be Egyptian number'),

  })
  let formik= useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''
      
    },
    validationSchema, 
    onSubmit:handleRegister
  })
  return <>
 <div className='log-res w-25 mx-auto py-2'>
<h2>Register now</h2>
{MessageError?<div className="alert alert-danger">{MessageError}</div>:null}
<form onSubmit={formik.handleSubmit}>
  <label htmlFor="name">Name</label>
  <input className=' form-control mb-2'  onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" />
  {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>:null}
  <label htmlFor="phone">Phone</label>
  <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.phone} type="tel" phone="phone" id="phone" />
 {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger">{formik.errors.phone}</div>:null}
  <label htmlFor="email">Email</label>
  <input className=' form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email} type="email" email="email" id="email" />
 {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}
  <label htmlFor="password">Password</label>
  <input className=' form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password} type="password" password="password" id="password" />
  {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}
  <label htmlFor="rePassword">RePassword</label>
  <input className=' form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.rePassword} type="password" rePassword="rePassword" id="rePassword" />
{formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>:null}
{isloading?<button  className='sub-btn btn mt-2' type='button'><i className='fas fa-spinner fa-spin'></i></button>:
<button disabled={!(formik.isValid&& formik.dirty)} className='sub-btn btn mt-2' type='submit'>Register</button>
}


</form>


 </div>
  </>
}

export default Register;