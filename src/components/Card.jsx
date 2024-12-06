import React from 'react'
import speech2 from '../assets/speech2.png'
import StarRating from './StarRating'

const Card = () =>{
    return(
        <div className=' bg-white  drop-shadow-md rounded-2xl mr-2 ml-2 my-4'>
            
                <img src={speech2} 
                 className=" h-40 object-cover"
                
                />
                
            <div className='p-5 border border-b'>
                <h1 className='py-2'>Suggest unknown number name</h1>
                <StarRating rating={3} />
            </div>

            <h3 className='p-5 text-xl '>Free</h3>

            <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
                No Scam

            </div>
            
        
        </div>

    )
}

export default Card