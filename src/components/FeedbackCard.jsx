import React from 'react'
import woman from '../assets/woman.png'
import quote3 from '../assets/quote3.png'


const FeedbackCard = () =>{
    return(
        <div className=' bg-white p-8 shadow-xl  rounded-3xl my-8 mx-2'>
            <div className='flex justify-between'>

            <div className='flex pr-20 pr-20 w-60 gap-4'>
                <img src={woman} />

                

                <div>
                    <h1 className='flex rounded:md border border-[orange] font-bold'>Mary<br></br></h1>
                    <p>Bank MD</p>
                </div>
               
                </div>
                <img className='h-9 ' src={quote3}/>
            </div>
              
           <div className='py-8'>
           <h3 className='text-lg'>
        I wanted to relate my recent experience dealing with scam callers.<br></br>
          Initially, I became angry with numerous calls and decided to block the numbers.<br></br>
          However, it appears that this tactic may have backfired, as the frequency of these fraudulent calls has increased.<br></br>
           It has grown rather puzzling; ignoring them now appears to produce greater results than blocking. However, <span className='text-[orange] font-bold'>No Scam Area App</span> assisted me.</h3>
            </div>   

        </div>
        
    )
}

export default FeedbackCard