import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";







const ContactUs = () =>{
    return(
        <>
            <div className='flex w-full min-h-screen justify-center items-center'>
              <div 
              className='flex flex-col md:flex space-y-6 bg-orange-800 w-full mex-w-4xl p-8 rounded-xl
               shadow-lg text-white overflow-hidden'
               >

                <div className='flex flex-col space-y-8 justify-between'>
                <div>
                  <h1 className='font-bold text-4xl tracking-wide '>
                    Contact Us..
                    </h1>  
                  <p className='pt-2 text-cyan-100 text-sm'>Hit us up today and let us know how we can<br></br>
                  serve you better. @ No Scam <span className='text-[orange]'>Area</span>, cares
                  </p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='inline-flex space-x-2 items-center'>
                    <IoCallOutline
                     className='text-orange-300 text-xl'
                     />
                    <span>+(234) 9078781812</span>

                    </div>

                    <div className='inline-flex space-x-2 items-center'>
                    <FaWhatsapp
                        className='text-orange-300 text-xl'
                     />

                    <span>+(234) 8184914907</span>

                    </div>

                    <div className='inline-flex space-x-2 items-center'>
                    <MdAttachEmail
                        className='text-orange-300 text-xl'
                     />

                    <span>support@noscamarea.com</span>

                    </div>

                  

                    <div className='inline-flex space-x-2 items-center'>
                    <IoLocationOutline
                        className='text-orange-300 text-xl'
                     />

                    <span>57 Andoyi Onike Lagos Nigeria/St,Sam Uk</span>

                    </div>
                    
                </div>
                <div className='flex space-x-4 text-lg'>
               <a href="#"> 
                <FaFacebookF name='logo-facebook'/>
                </a>

                <a href="#"> 
                <FaXTwitter name="logo-twitter"/>
                </a>

                <a href="#"> 
                <FaInstagram name='logo-instagram'/>
                </a>
                </div>
                </div>
              <div className='relative'>
 
                <div className='absolute z-0 w-40 h-40 bg-white-400 rounded-full -right-28 -top-28'

                ></div>

                <div
                 className='relative z-10  bg-white rounded-xl shadow-lg p-8 text-gray-600 '>
                    <form action="" className='flex flex-col space-y-4'>
                        <div>
                            <label for="" className='text-sm'
                            >Your name</label>
                       
                            <input type="name" 
                            placeholder='Your name' 
                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                             focus:ring-2 focus:ring-orange-300'
                            />
                            
                        </div>
                        <div>
                            <label for="" className='text-sm'
                            >Email Address</label>
                        
                            <input type="email" 
                            placeholder='Email Address' 
                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                             focus:ring-2 focus:ring-orange-300'
                            />
                            
                        </div>
                          
                        <div>
                            <label for="" className='text-sm'
                            >Message</label>
                        
                            <textarea
                            placeholder='Message' 
                            rows={5}
                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                             focus:ring-2 focus:ring-orange-300'
                            ></textarea> 
                        </div>
                        <button className='inline-black self-end bg-orange-700 text-white
                         font-bold rounded-lg px-6 py-2 uppercase text-sm'
                         >Send Message</button>
                        <div>
                            
                       </div>

                    </form>
                </div>
              </div>

              </div>
            </div>
        </>
    )
}
export default ContactUs;