import React from 'react'
import tshart from '../assets/tshart.png'
import { Rate } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from '../Slice/ProductSlice';
 import { ToastContainer, toast,Slide } from 'react-toastify';
const Card = ({imgsrc,title,price,disprice,disparcent,id,productdetels}) => {

    const navigate = useNavigate()

        const productdettels = ()=>{

          navigate(`/productdettels/${id}`)
        }

                  const dispatch = useDispatch ()

                            const selector = useSelector(state=>state.product.cart)

                     
                        const notify = (matchitemtostify)=>{

                        if (!matchitemtostify) {
                                 toast.success('SuccsessfullY Product added to your cart!', {
                   position: "top-right",
                   autoClose: 1090,
                   hideProgressBar: false,
                   closeOnClick: false,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   transition: Slide,
                });
                return;
                          
                        }
                            toast.warn('Product is already in your cart!!', {
                position: "top-right",
                autoClose: 1190,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
                               

                        }

                            

                  const addtocart = ()=>{


                    let matchitem = selector.find((item)=>item.id === id)

                       matchitem ? notify(true) :(
                          dispatch(cartReducer({...productdetels,quan : 1})),
                    notify(false)
                       )
                      
                  }

  return (
    <>

        <div className=' group '>
          <div className=' relative  overflow-hidden'>
            <img src={imgsrc} onClick={productdettels} className='w-73.75 h-70 bg-[#F0EEED]' alt="" />
             <button onClick={addtocart} className='py-3 px-6 bg-black text-white mx-auto  absolute -bottom-12 group-hover:bottom-0 w-full duration-300 ease-linear'>add to cart</button>
          </div>
            <h1 className='text-[20px] font-bold leading-[100%] mt-4'>{title}</h1>
               <h1 className='mt-3'>
      <Rate allowHalf defaultValue={2.5} />
               </h1>
               <div className='flex gap-3'>
               <a href="" className='text-xl font-bold'>$ {price}</a>
               <p className='text-xl text-gray-300 font-bold'>$ {disprice}</p>
               <h1 className='w-20 rounded-[68px] flex items-center justify-center bg-[#FF33331A] text-red-400'>{disparcent}%</h1>
               </div>
        </div>
      
    </>
  )
}

export default Card
