import React, { useState } from "react";
import logo from "../assets/logo.svg";
import lock from "../assets/lock.svg";
import burger from "../assets/burger.svg";
import close from "../assets/close.svg";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
    const navigate = useNavigate() 
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1500px] m-auto w-full h-ful flex justify-between item-center">
        <img src={logo} style={{ width: 90, height: 90 }} />

        <div className="hiddden md:flex item-center py-6">
          <ul className="flex gap-4">
            <li className="hover:cursor-pointer font-bold">Home</li>
            <li 
            onClick={()=>navigate('/about')}
            className="hover:cursor-pointer font-bold">About</li>

            <li onClick={()=>navigate('/contact_us')}
            className="hover:cursor-pointer font-bold">Contact Us</li>
            <li className="hover:cursor-pointer font-bold">Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button 
          onClick={()=>navigate('/login')}
          className="flex justify-between item-center bg-transparent px-6 gap-2 py-9 font-bold">
            <img src={lock} style={{ width: 30, height: 30 }} />
            Login
          </button>
          <button className="rounded-md py-9 px-2 my-0  border border-[orange]  flex flex-col text-white font-bold bg-transparent hover:bg-orange-400 bg-blue-700 text-black" onClick={()=>navigate('/register')}>
            Sign Up For Free
          </button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
        <img src={toggle?close:burger } style={{width: 40, height: 40}}/>
        </div>

      </div>
     
      <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8':'hidden'}>
        <ul>
            <li className="p-4 hover:bg-orange-100">phoneNumbers</li>
            <li className="p-4 hover: bg-orange-100">Suggest Name</li>
            <li className="p-4 hover:bg-orange-100">Confirm Number</li>
            <li className="p-4 hover:bg-orange-100">Get Support</li>
            <li className="p-4 hover:bg-orange-100" >MemberShip</li>
            <li className="p-4 hover:bg-orange-100" >Countries</li>



            <div className='flex flex-col my-4 gap-4'>
              <button className="border border-[orange] flex justify-center item-center bg-transparent px-6 gap-2 py-4" onClick={()=>navigate('/login')}>
                <img src={lock} style={{width: 30, height: 30}} />
                Login
              </button>
              <button className="rounded-md py-5  px-8 bg-[orange]  text-black font-bold" onClick={()=>navigate('/register')}>
                 Sign Up For Free
            </button>
            </div>

            <div onClick={handleClick}>
            </div>

        </ul>
      </div>


    </div>
  );
};
export default Navbar;
