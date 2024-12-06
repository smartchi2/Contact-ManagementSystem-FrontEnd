import React from 'react'

export default function Add(){
    return(
        <div className='container md:mt-10'>
            <div className='flex flex-col items-center'>
                <div className='text-orange-400'>
                    <svg 
                     className='w-24 h-24'
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="https//www.w3.org/2000/svg"
                    >
                    <path 
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 8 0 000 16zm3.707-9.293a1
                       1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                       clipRule="evenodd"

                    />
                    </svg>
                  <div className='text-lg font-semibold text-orange-500'>
                    Contact Added Successfully
                  </div>
                  <a className='mt-10 ' href="/">
                  <button className='h-10 px-5 text-orange-700 transition-colors
                  duration-150 border border-orange-300 rounded-lg
                  focus:shadow-outline hover:bg-orange-500 hover:text-orange-100'>
                   Close
                  </button>

                  </a>
                   
                </div>
            </div>
        </div>
    );
}