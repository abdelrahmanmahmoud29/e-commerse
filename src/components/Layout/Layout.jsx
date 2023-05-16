import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';
function Layout({userData}) {
  return <>
  
  <Navbar userData={userData} />
  <Outlet></Outlet>
  <Footer/>
  </>
}

export default Layout;