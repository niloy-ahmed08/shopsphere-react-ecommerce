import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";

const LatestOffer = () => {
  return (
    <div className=''>
      <div className="container">

               <div className='flex gap-[212px] items-center bg-black p-16 rounded-[62px] justify-center '>

             <h1 className='text-[40px] leading-11.25 font-bold text-white'>STAY UPTO DATE ABOUT <span className=' block'>OUR LATEST OFFERS</span> </h1>
              <div className=''>
                <div className=' relative'>
                <input type="text" placeholder='Enter your email adress' className='w-87.25 h-12 pt-5 pl-12 pb-5 pr-27 outline-none bg-white rounded-[62px] text-gray-400' />
                <MdMarkEmailUnread className='text-[#00000066] absolute top-4 left-5 text-sm' />

                </div>
                          
                     <div className=' relative cursor-pointer'>
                                           <input type="text"  className=' outline-none relative w-88 h-12 pt-3 pl-5 pb-3 pr-31 rounded-[62px] block mt-7 bg-white text-gray-400' />
                                      <p className='  text-black absolute top-3 text-lg font-normal left-[25%] '>Subscribe to Newsletter</p>
                     </div>
                     
              </div>


      </div>
    </div>
    </div>
  )
}

export default LatestOffer
