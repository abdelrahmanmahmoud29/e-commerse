import React from 'react';
import {useNavigate} from 'react-router-dom'
 function Logout() {


  
  let navigate= useNavigate();
  navigate('/login')
  return <>
  <h1>Logout</h1>
  </>
}

export default Logout;