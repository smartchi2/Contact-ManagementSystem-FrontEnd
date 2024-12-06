import {useContext} from 'react'
import { StepperContext } from '../contexts/StepperContext'

export default function PhoneNumber (){
    const {userData, setUserData} = useContext(StepperContext);
    const handleChange = (e) =>{
        const {phoneNumber, value} = e.target;
        setUserData({...userData, [phoneNumber]: value});
    }
 return <div className='flex flex-col'>
    <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-black-500 text-xs
        leading-8 upperCase'>
        {" "}
        PhoneNumber
         <div className='bg-white my-2 p-1 flex border border-orange-200
         rounded'>
            <input 
             onChange={handleChange}
             value={userData["PhoneNumber"] || "" }
             name="PhoneNumber"
             placeholder="PhoneNumber"
             className='p-1 px-2 appearance-none outline-none w-full
             text-orange-800'
            
            />

        </div>
        </div>
    </div>
    </div>
}