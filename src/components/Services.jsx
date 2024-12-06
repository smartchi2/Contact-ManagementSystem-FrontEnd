import React from 'react'
import Card from './Card'
import Slider from "react-slick";



const Services = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            
          ]
    
         
      };

   return (
    <div className='w-full bg-[#FFDFBF] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[500px]'></div>
        <h1 className='text-3xl py-3 font-bold ml-3'>Tips on why you need<span className='text-[orange]'> Us</span></h1>
        <p className='ml-5 text-[#536E96] '>Since criminals do receive your messages,<br></br>
             they can now access your account as you.<br></br> 
             From there, they can do nearly anything,<br></br>
             such as change passwords or transfer money.<br></br>
              So it makes sense to protect your phone number<br></br> in order
               to safeguard your identity and finances............</p>
        <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />



        </Slider>
        
        </div>

    )
}
export default Services