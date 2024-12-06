import React from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";

const OfferCard = ({icons, title}) => {
    return(
        <div className='OfferCard bg-white p-4 shawod-lg rounded-md flex item-center gap-4 justify-between border border-transparent hover:border-[orange] hover:cursor-pointer group/edit'>
            <div className='flex gap-4'>
            {icons}
            <h1 className='text-2xl font-semibold'>{title}</h1>

            </div>

            <div className='group-hover/edit:bg-[orange] rounded-md p-4'>
            <FaArrowRightFromBracket 
            size={30}
            style={{color:'orange'}}
             className='arrowIcon'

            />

    
            </div>

            </div>
    )
}
export default OfferCard