import React from 'react'
import OfferCard from './OfferCard'
import { FaRegAddressBook } from 'react-icons/fa'
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { FaShareSquare } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
 import { useNavigate } from "react-router-dom";

const Offers = () =>{
     const navigate = useNavigate() 
    return(
        <div className='w-full bg-[#FFDFBF] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[400px]'>
                <h1 className='md:leading-[72px] text-3xl font-bold'> What We <span className='text-[orange]'>Offer</span>
                </h1>
                <p className='text-lg text-gray-600'>Your calls and calls you receive is what we are after..</p>

                <div className=' grid lg:grid-cols-4  grid-cols-2 py-12 gap-10'>

                    <div className= "" onClick={()=>navigate('/addContacts')}>
                   <OfferCard 
                   icons={<FaRegAddressBook size={20}/>}
                   title={'AddContact'}
                   /> 
                    
                   </div>
                   <OfferCard 
                   icons={<MdDeleteSweep size={20}/>}
                   title={'Delete Contact'}
                   /> 

                   <OfferCard 
                   icons={<MdOutlineSettingsSuggest size={20}/>}
                   title={'Suggest Name'}
                   /> 

                   <OfferCard 
                   icons={<AiTwotoneEdit size={20}/>}
                   title={'Edit Contact'}
                   /> 

                    <OfferCard 
                   icons={<FaSearch size={20}/>}
                   title={'Search Contact'}
                   /> 

                    <OfferCard 
                   icons={<HiMiniViewfinderCircle size={20}/>}
                   title={'Find All Contact'}
                   /> 

                    <OfferCard 
                   icons={<FaShareSquare size={20}/>}
                   title={'Share Contact'}
                   /> 

                   <OfferCard 
                   icons={<MdOutlineReportProblem size={20}/>}
                   title={'Report Contact'}
                   /> 
                </div>

                 </div>
                 {/* onClick={handleClick}  */}


            </div>

    )
}
export default Offers