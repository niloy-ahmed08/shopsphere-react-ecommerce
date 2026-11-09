import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { RemoveReducer } from '../Slice/ProductSlice';
import { toast, Bounce, Slide } from 'react-toastify';
const CartItem = ({imgsrc,titles,price,id}) => {

             const dispatch = useDispatch()


                const RemoveNotify = ()=>{
                  toast.success('Your card item Deelete!', {
position: "top-right",
autoClose: 700,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
});
                }

              const handaleaDellate = ()=>{

                      dispatch(RemoveReducer(id))
                      RemoveNotify()

              }

  return (
    <div className='py-5'>
      <div className="container">
           <div className='  '>
                 <div className='flex gap-4 relative border-b pb-7 border-[#0000001A]'>
                    <img src={imgsrc} className='w-31' alt="" />
                      <div>
                        <h1>{titles}</h1>
                        <p className='mt-1'>size</p>
                         <h3 className='mt-2'>color black</h3>
                         <h1 className='mt-4 font-bold text-2xl'>${price}</h1>
                      </div>
                      <div onClick={handaleaDellate} className=' cursor-pointer absolute top-2 right-3'>
                        <FaRegTrashAlt className='text-red-400'/>

                      </div>
                     
                     
                                          <div className=' absolute bottom-7 right-4  p-2 py-4 px-5 bg-[#F0F0F0] h-12 items-center flex justify-center rounded-[60px] mt-5 '>
                     
                                           <div className='flex gap-10  items-center'>
                                             <FaMinus />
                     
                                             <h1>3</h1>
                                             <FaPlus />
                     
                                           </div>
                     
                                          </div>
                 </div>
            </div>
      </div>
    </div>
  )
}

export default CartItem
