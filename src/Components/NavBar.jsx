import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";


const NavBar = () => {
  return (
    <div className='py-6 bg-white'>
           <div className="container">

               <div className='flex items-center  justify-between'>

                  <h1 className='text-[34px] font-semibold leading-[100%] text-black  [text-box-edge:cap_alphabetic]  tracking-[-1.5px]'>SHOP.CO</h1>
                      <ul className='text-[16px] font-normal text-black  font-satoshi gap-9 flex items-center'>
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                      </ul>
                      <div className=' relative  '>
                      <input type="text" className='py-4 px-13 bg-[#F0F0F0] rounded-[62px]' />
                      <div className='flex gap-3 items-center absolute top-4 left-6 outline-none focus:outline-none border-none focus:border-none'>
                        <IoSearchSharp className='text-[#00000066] text-[16px]' />
                        <h1 className='text-[16px] font-normal text-[#00000066]'>Search for products...</h1>
                      </div>
                      </div>

                      <div className='flex gap-6 text-2xl'>
                        <IoCart />
                        <IoIosContact />

                      </div>

               </div>

           </div>
    </div>
  )
}

export default NavBar
