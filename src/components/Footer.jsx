import React from 'react'
import logo from '../assets/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import safe2 from "../assets/safe2.png"






const Footer = () => {
    return(
        <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-6 max-[780px]:grid-cols-2 gap-8 max-w-[400px]'>

            <div className='col-span-2'>
            <img src={logo} style={{ width: 90, height: 90 }} />
            <h1 className='font-bold'><span className='text-[orange]'>NO SCAM</span> AREA</h1>

            <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
            <h3 className='py-2 text-[#60737A]'>Call: +234 9078781812</h3>
            <h3 className='py-2 text-[#60737A]'>Address: 57 Andoyi Onike Lagos Nigeria/St,Sam Uk</h3>
            <h3 className='py-2 text-[#60737A]'>Email: support.noscamarea@gmail.com</h3>

            <div className='flex gap-4 py-4'>
            <div className='p-4 bg-[#FFDFBF] rounded-xl'><FaFacebookF size={25} style={{color:  '#FFA500'}}/> </div>
            <div className='p-4 bg-[#FFDFBF] rounded-xl'><FaXTwitter size={25} style={{color:  '#FFA500'}}/> </div>
            <div className='p-4 bg-[#FFDFBF] rounded-xl'><FaInstagram size={25} style={{color:  '#FFA500'}}/> </div>
            <div className='p-4 bg-[#FFDFBF] rounded-xl'><FaLinkedin size={25} style={{color:  '#FFA500'}}/> </div>
            <div className='p-4 bg-[#FFDFBF] rounded-xl'><FaYoutube size={25} style={{color:  '#FFA500'}}/> </div>


            </div>

        </div>

        <div>
            <h3 className='text-2xl font-bold'>Explore</h3>
            <ul className='py-6 text-[#607374]'>
                <li className='py-2'>Home</li>
                <li className='py-2'>About</li>
                <li className='py-2'>Platform</li>
                <li className='py-2'>Membership</li>
                <li className='py-2'>Pricing</li>
            </ul>
        </div>

        <div>
            <h3 className='text-2xl font-bold'>Offers</h3>
            <ul className='py-6 text-[#607374]'>
                <li className='py-2'>Add Contact</li>
                <li className='py-2'>Delete Contact</li>
                <li className='py-2'>Suggest Name</li>
                <li className='py-2'>Search Contact</li>
                <li className='py-2'>Share Contact</li>
                <li className='py-2'>Edit Contact</li>
                <li className='py-2'>Find All Contacts</li>
                <li className='py-2'>Report Contact</li>
            
            </ul>
        </div>

        <div className='max-[780px]:col-span-2'>
        <h3 className='text-2xl font-bold'>Subscribe</h3>
        <h3 className='py-2 text-[#60737A]'>Address: 57 Andoyi Onike Lagos Nigeria/St,Sam Uk</h3>
         <form>
           <input className='bg-[#F2F3F4] P-4 w-full rounded' 
           
           placeholder='Email here'
           />
           
           <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[orange] text-white font-meduim">
            Subscribe Now
            </button>

         </form>




        </div>



        </div>

        <div className='flex justify-center'>
         <img src={safe2} 
         style={{ width: 90, height: 90,  }}/>
         <h1 className='text-[Green]  font-bold px-9 p-4'>Protected/Secured</h1>
         </div>

        <dvi className='flex justify-center py-6 w-full p-2 px-3'>
        <h1 className='font-bold'>Copyright © 2024 | All rights reserved | <span className='text-[orange]'>No Scam Area</span> | Created With 🥰🥰🥰</h1>
       </dvi>
       <p className='flex justify-center py-3 px-3 text-[#536E96]'>This website is Developed and Designed By Smart and it is not meant for sell, <br></br> Reach out to him by using this email chinemeremsmart81@gmail.com.. </p>
        </div>
    )
}
export default Footer