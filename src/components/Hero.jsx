import React from 'react'
import newImage from '../assets/newImage.jpg'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero =() =>{
   return (
     <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[400px]'>

            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[orange] font-medium'>RECEIVE SECURED CALLS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-4xl font-semibold'>Join Over <span className='text-[orange]'>1M+</span> Users  
                    across <span className='text-[orange]'>africa</span> to enjoy this great
                    offer 
                </h1>
                <p className='py-2 text-lg text-gray-600'>we are making sure that all calls are secured and no scammer will go on noticed</p>

                <form className='bg-white border max-w-[700px] p-4 input-box-shadow  rounded-md flex justify-between'>
                    <input
                     className='bg-white'
                     type='text'
                     placeholder='Search services'

                    />

                    <button>
                      <AiOutlineSearch 
                        size={20}
                        className='icon'
                        style={{color: "#000"}}
                      />

                    </button>
                </form>

            </div>

            <img  src={newImage}  className='mdorder-last order-first' />
     
        </div>
        
        
        </div>
    )
}

export default Hero