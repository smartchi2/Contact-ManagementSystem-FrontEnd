import React from 'react'
import FeedbackCard from './FeedbackCard'
import Slider from "react-slick";



const FeedBack = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
    
         
      };

   return (
    <div className=' bg-white py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-1500px]'></div>
        <h1 className='text-3xl py-3 font-bold ml-3'>Feed <span className='text-[orange]'>Backs</span></h1>
        <p className='ml-5 text-[#536E96] '>Feed backs helps us to improve and serve you better</p>
        <Slider {...settings}>

        <FeedbackCard />
        <FeedbackCard />
       



        </Slider>
        
        </div>

    )
}
export default FeedBack
    //     <div className=' bg-white  drop-shadow-md rounded-2xl mr-2 ml-2 my-4 flex gap-4 pr-3 pr-3 gap-3 justify-between item-center'>

    //     <div className='border border-2px rounded-md border-[orange]'>
    //     <img src={woman} 
    //      className=" h-30 object-cover"
        
    //     />
        
    // <div className='p-5 border border-b'>
    
    //     <h2 className='py-2 font-bold'>Mary James</h2>
    //     <p>I wanted to relate my recent experience dealing with scam callers.<br></br>
    //      Initially, I became angry with numerous calls and decided to block the numbers.<br></br>
    //       However, it appears that this tactic may have backfired, as the frequency of these fraudulent calls has increased.<br></br>
    //        It has grown rather puzzling; ignoring them now appears to produce greater results than blocking. However, <span className='text-[orange] font-bold'>No Scam Area App</span> assisted me.</p>
        
    // </div>
    // </div>

    // <div>

    // <h3 className='p-5 text-xl '></h3>

    // <div className='border border-2px rounded-md border-[orange] pr-5 '>

    // <img src={man2} 
    //      className=" h-30 object-cover"
        
    //     />
        
    // <div className='p-5 border border-b'>
    
    //     <h2 className='py-2 font-bold'>Peter Paul</h2>
    //     <p>I received a phone call from someone purporting to be from the<br></br> 
    //     Social Security Administration (SSA), who informed me that my social security<br>
    //     </br> number had been used fraudulently. They asked for information. Thank you, <span className='font-bold text-[orange]'>No Scam Area App</span><br></br> 
    //     for letting me know it was from scammers.</p>
        
    // </div>
    // </div>
    //     </div>
   

