import React from 'react'
import { MdCancel } from "react-icons/md";

const HeaDer = () => {
  return (
    <div className='py-2.5 bg-black'>
         <div className="container">
                  <div className=' flex justify-center items-center relative'>
                 <h1 className='text-sm font-bold text-white text-center'>Sign up and get 20% off to your first order. 
                  <span className='text-white text-[14px] border-b ml-2'>Sign Up Now </span></h1>
                  </div>
                    <MdCancel className='  text-white absolute top-3 text-2xl right-25  ' />

         </div>
    </div>
  )
}

export default HeaDer
