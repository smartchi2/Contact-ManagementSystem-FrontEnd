import React from 'react'
import { FaLock } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Login = () =>{
    const navigate = useNavigate()
    return(
           
            <div className='h-[100vh] flex flex-col items-center justify-center  text-black bg-background-{{background.png}}  bg-cover'>
            <div className="h-[390px] border border-orange-600/20 w-80 px-6 my-4 rounded-lg border-orange-lg overflow-hidden">   
            <div className={`${open?'translate-y-[25px] transition-all' : 'translate-y-[400px] transition-all'}`}>
             <h2 className="text-3xl font-bold pb-6 text-center ">Login</h2>
             <form className="flex flex-col items-center" action="">
    
                <div className='w-full relative'>
                </div>
                <div className='w-full relative'>
                    <input className='border border-[orange] w-full rounded-full py-2 my-4 px-4 bg-transparent' placeholder='Your Email' type="email" />
                    <MdMarkEmailRead className="absolute top-[35%] right-3" />
    
                </div>
                <div className='w-full relative'>
                    <input className='border border-[orange] w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='Your Password' type="password" />
                    <FaLock className="absolute top-[35%] right-3"/>
                </div>
                <div className='flex justify-between w-full'>
                <div className='text-[14px] flex gap-2'>
                  <input type="checkbox" name="" id="" />  
                  <label htmlFor="">Remember me</label>
                </div>
                <span className='text-[text-[14px]]'>Forget Password</span>
                </div>
                <button className="my-4 py-2 w-full rounded-full bg-[orange] font-bold">Login</button>
                <span className='text-[14px]'>Don't have an account? <span className='font-semibold cursor-pointer'  onClick={() => navigate("/register")}>Register</span></span>
             </form>
            </div>
            </div> 
        </div>
    
    

       
    )
    
} 
export default Login 