import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate()
    return( 
        <div className='h-[100vh] flex flex-col items-center justify-center  text-black bg-background  bg-cover'>
        <div className="h-[390px] border border-orange-600/20 w-80 px-6 my-4 rounded-lg  overflow-hidden">   
        <div className={`${open?'translate-y-[25px] transition-all' : 'translate-y-[400px] transition-all'}`}>
         <h2 className="text-3xl font-bold pb-6 text-center ">Register</h2>
         <form className="flex flex-col items-center" action="">

            <div className='w-full relative'>
                <input className='border border-[orange] w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='Your Name' type="name" />
                 <FaUser className="absolute top-[35%] right-3"/>
            </div>
            <div className='w-full relative'>
                <input className='border border-[orange] w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='Your Email' type="email" />
                <MdMarkEmailRead className="absolute top-[35%] right-3" />

            </div>
            <div className='w-full relative'>
                <input className='border border-[orange] w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='Your Password' type="password" />
                <FaLock className="absolute top-[35%] right-3"/>
            </div>
            <div>

            </div>
            <button className="my-4 py-2 w-full rounded-full bg-[orange] font-bold">Register</button>
            <span className="text-[14px]">Already have an account? <span className="font-semibold cursor-pointer"   onClick={() => navigate("/login")}>Login</span></span>
         </form>
        </div>
        </div> 
    </div>

    )
}
export default Register