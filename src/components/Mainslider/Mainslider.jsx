import React from 'react';
import sliderPic1 from '../../assets/sliderPic1.jpg'
import sliderPic3 from '../../assets/sliderPic3.jpeg'
import sliderPic4 from '../../assets/sliderPic4.webp'
import Slider from "react-slick";
function Mainslider() {
  let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return <>
  
  <Slider className=' Mainslider' {...settings}>
    <div >
      <img className=' slide w-100' src={sliderPic1} alt="" />
    </div>
    <div>
      <img className='slide w-100'  src={sliderPic4} alt="" />
    </div>
    <div>
      <img className='slide w-100'  src={sliderPic3} alt="" />
    </div>

   
   
  </Slider>
 
  
  </>
}

export default Mainslider;