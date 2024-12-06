import React from 'react'

const AddContactsControlls = ({ handleClick, currentStep, steps }) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            {/* { back button } */}
            <button 
            onClick={()=>handleClick()}
            className={`bg-white text-[black] uppercase py-2 px-4
             rounded-xl  font-semibold cursor-pointer border-2 border-slate-300
             hover:bg-orange-400 hover:text-white transition duration-2oo 
             ease-in-out ${
                currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}>
                Back
            </button>

            {/* { next button } */}
            <button 
            onClick={()=>handleClick("next")}
            className='bg-orange-400 text-[black] uppercase py-2 px-4 
            rounded-xl  font-semibold cursor-pointer 
             hover:bg-blue-900 hover:text-white transition duration-200 ease-in-out'
             >
             {currentStep === steps.length -1 ? "Confirm" : "Next"}
            </button>
            
        </div>
    )
}
export  default AddContactsControlls;