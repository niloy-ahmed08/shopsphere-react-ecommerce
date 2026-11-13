import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const NavBar = () => {


   const selector = useSelector(state=>state.product.cart)
     console.log(selector)
   const navigate = useNavigate()

  return (
    <div className='py-6 bg-white'>
           <div className="container">

               <div className='flex items-center  justify-between'>

                  <h1 className='text-[34px] font-semibold leading-[100%] text-black  [text-box-edge:cap_alphabetic]  tracking-[-1.5px]'>SHOP.CO</h1>
                      <ul className='text-[16px] font-normal text-black  font-satoshi gap-9 flex items-center'>
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li className=' cursor-pointer' onClick={()=>navigate('/newarrivales')} >New Arrivals</li>
                        <li>Brands</li>
                      </ul>
                      <div className=' relative  '>
                      <input type="text" placeholder='search your products' className='py-4 px-13 bg-[#F0F0F0] rounded-[62px]' />
                      <div className='flex gap-3 items-center absolute top-5.5 left-6 outline-none focus:outline-none border-none focus:border-none'>
                        <IoSearchSharp className='text-[#00000066] text-[16px]' />
                      </div>
                      </div>

                      <div className='flex gap-6 text-2xl'>
                        <div onClick={()=>navigate('/cartdettels')}  >
                           <IoCart  className=' relative' />
                        <div className=' -mt-7 absolute size-4 rounded-full flex items-center justify-center text-xs text-white bg-red-400'>
                          {selector.length}

                        </div>
                        </div>
                       
                        <IoIosContact />

                      </div>

               </div>

           </div>
    </div>
  )
}

export default NavBar
