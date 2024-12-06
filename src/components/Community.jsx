import React from 'react'
import hmm from '../assets/hmm.png'

const Community = () => {
    return(
            <div className='w-full bg-[#FFDFBF] py-24'>
               <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px] items-center'>

               <img  src={hmm} className='w-[650px] mx-auto'/>
            

                   <div>
                       <h1 className='py-2  text-3xl font-semibold'>Start <span className='text-[orange]'>Saving</span> With Us   
                          <span className='text-[orange]'> For </span> Free
                           
                       </h1>
                       <p className='py-2 text-lg text-gray-600'>Your contacts are save with us as we will not give it out...</p>
       

                       <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[orange] text-white font-bold">
                          Sign Up For Free
                       </button>
                   </div>
       
                   
               </div>
               
               
               </div>
    )
}
export default Community