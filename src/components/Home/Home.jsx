import React from 'react';
import styles from './Home.module.css';
import Mainslider from '../Mainslider/Mainslider';
import Featuredproduct from '../Featuredproduct/Featuredproduct';
import Categoryslider from '../Categoryslider/Categoryslider'
function Home() {
  return <>
<section className=' homebg'>
<Mainslider/>
<div className="container mt-5 pt-5">
 <Featuredproduct/>
 </div>
</section>
  </>
}
export default Home;