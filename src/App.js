import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import Checkout from '../src/components/Checkout/Checkout'
import Home from '../src/components/Home/Home'
import Cart from '../src/components/Cart/Cart'
import Mainslider from '../src/components/Mainslider/Mainslider'
import Product from '../src/components/Product/Product'
import Notfound from '../src/components/Notfound/Notfound'
import Category from '../src/components/Category/Category'
import Productsdetails from '../src/components/Productsdetails/Productsdetails'
import Layout from '../src/components/Layout/Layout'
import Register from './components/Register/Register';
import Login from '../src/components/Login/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useState } from 'react';
import jwtDecode from 'jwt-decode'
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import { CounterContextProvider } from './Context/CartContext';



function App() {
  const [userData, setUserData] = useState(null);
  function saveUserData(){
    let encodedToken=localStorage.getItem('userToken')
    let decodedToken= jwtDecode(encodedToken)
    setUserData(decodedToken)
  }
  let routers= createHashRouter([
    {path:'',element:<Layout userData={userData}/>,children:[
      {index:true,element:<Home/>},
      {path:'product',element:<Product/>},
      {path:'logout',element:<Login/>},
      {path:'productsdetails/:id',element:<ProtectedRoute><Productsdetails/></ProtectedRoute>},
      {path:'categoryDetails/:id',element:<ProtectedRoute><CategoryDetails/></ProtectedRoute>},
      {path:'register',element:<Register/>},
      {path:'checkout',element:<Checkout/>},
      {path:'login',element:<Login   saveUserData={saveUserData}/>},
      {path:'mainslider',element:<Mainslider/>},
      {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'Category',element:<ProtectedRoute><Category/></ProtectedRoute>},
      {path:'*', element:<Notfound/>}
    ]}
  ])
  return <CounterContextProvider>
<Toaster/>
<RouterProvider router={routers} />

  </CounterContextProvider>
  
 
  
  
}



export default App;
