import React from 'react'
import happy from '../assets/happy.png'
import staffs from '../assets/staffs.png'
import secure from '../assets/secure.png'
import satisfied from '../assets/satisfied.png'
import target from '../assets/target.png'

const Achivement = () => {
    return(
        <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[400px]'>

            <div className='flex flex-col justify-center'>
                <h1 className='md:leading-[72px] text-3xl font-bold'> Our <span className='text-[orange]'>Achievements</span> So Far </h1>
                <p className='text-lg text-gray-600'>With great work and commiment to what we love to do we have come this far..</p>

                <div className='grid grid-cols-2 py-16'>
                    <div className='py-6'>
                        <div className='p-4 flex'>
                        <img src={staffs} className=' rounded-xl h-13 w-15 border border bg-[#ffdbbb]' />
                        </div>
                        <div className='px-3'>
                         <h1 className='text-2xl font-semibold'>1,000</h1>
                         <p className='text-[#6D737A]'>Staffs</p>
                        </div>
                    

                    </div>

                    <div className='py-6 '>
                        <div className='p-4'>
                        <img src={secure} className=' rounded-xl h-100 w-45 border border bg-[#ffdbbb]' />
                        </div>
                        <div className='px-3'>
                         <h1 className='text-2xl font-semibold'>1,000,000<span className='text-[orange]'>+</span></h1>
                         <p className='text-[#6D737A]'>Secured Users</p>
                        </div>
                    

                    </div>

                    <div className='py-6 '>
                        <div className='p-4'>
                        <img src={satisfied} className=' rounded-xl h-100 w-45 border border bg-[#ffdbbb]' />
                        </div>
                        <div className='px-3'>
                         <h1 className='text-2xl font-semibold'>900k<span className='text-[orange]'>+</span></h1>
                         <p className='text-[#6D737A]'>Our Satisfied Clients</p>
                        </div>
                    

                    </div>

                    <div className='py-6 '>
                        <div className='p-4'>
                        <img src={target} className=' rounded-xl h-100 w-45 border border bg-[#ffdbbb]' />
                        </div>
                        <div className='px-3'>
                         <h1 className='text-2xl font-semibold'>2,000,000<span className='text-[orange]'>+</span></h1>
                         <p className='text-[#6D737A]'>Our Target</p>
                        </div>
                    

                    </div>


                </div>
            </div>
            
        
                  <img  src={happy}  className='m-auto md:order-last order-first' />
     


        </div>
        
         
        
        </div>
    )
}
export default Achivement