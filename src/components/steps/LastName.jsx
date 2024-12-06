import {useContext} from 'react'
import { StepperContext } from '../contexts/StepperContext'

export default function LastName (){
    const {userData, setUserData} = useContext(StepperContext);
    const handleChange = (e) =>{
        const {Name, value} = e.target;
        setUserData({...userData, [Name]: value});
    }
 return <div className='flex flex-col'>
    <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-black-500 text-xs
        leading-8 upperCase'>
        {" "}
        LastName
         <div className='bg-white my-2 p-1 flex border border-orange-200
         rounded'>
            <input 
             onChange={handleChange}
             value={userData["LastName"] || "" }
             name="LastName"
             placeholder="LastName"
             className='p-1 px-2 appearance-none outline-none w-full
             text-orange-800'
            
            />

        </div>
        </div>
    </div>
    </div>
}