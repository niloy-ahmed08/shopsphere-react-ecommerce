import React, { useEffect, useState } from 'react'
import tsart from '../assets/tsart.png'
import { Rate, Skeleton } from 'antd';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { useParams } from 'react-router';
import SKelitoon from '../Components/SKelitoon';
import { useDispatch } from 'react-redux';
import { cartReducer } from '../Slice/ProductSlice';


const ProductDettels = () => {

  const [prodct,setprodct]=useState([])
  const [images,setimages]=useState([])
     const {id} = useParams()
const[error,seterror]=useState([])

  const Allproducts = async ()=>{

             const data = await axios.get(`https://dummyjson.com/products/${id}`)
               setprodct(data.data)
                setimages(data.data.images)
                seterror(false)
           }

                
           

           

             useEffect(()=>{
                         Allproducts()
                       },[])

                       const  dispatch = useDispatch()

                   



  return (
    <div className='py-10'>
      <div className="container">

         
        <div className='flex gap-10  items-center'>

        <div className='flex gap-4 items-center w-[50%]'>

        <div className='mt-3.5 space-y-2'>

          {
            images.map((item)=> <img src={item} className='w-38 h-41.75' alt="" />)
          }
           
          
        </div>
        <div>
          {
            error ?      <div className='w-111'>
                       <SKelitoon  />
                    
                       
                       </div>

            :
            <img className='w-111' src={prodct.thumbnail}  alt="" />
          }
            
        </div>

      </div>

          <div className='w-[50%]'>
            <h1 className='text-4xl font-bold'>{prodct.title}</h1>
                 <Rate className='mt-2' allowHalf value={prodct.rating} />
                 <div className='flex gap-2'>
                    <h1 className='text-black'>${(prodct.price)}</h1>
                    <h3 className='text-gray-400'>${prodct.discountPercentage}</h3>
                    <h1 className='w-18 bg-gray-400 text-red-400 flex items-center justify-center rounded-sm'>{prodct.discountPercentage}%</h1>
                 </div>
                 <p className='text-sm font-normal text-gray-400 mt-5 border-b pb-6 leading-6'>{prodct.description} </p>
                       <h1 className='text-sm font-bold mt-4'>Select Colors</h1>
                     <div className='mt-2 flex gap-4 items-center border-b pb-5'>
                        <span className=' size-6 rounded-full bg-black'></span>
                          <span className=' size-6 rounded-full bg-amber-900'></span>
                            <span className=' size-6 rounded-full bg-pink-500'></span>
                     </div>
                       <h1 className='text-sm font-bold mt-4'>Choice a Size</h1>
                     <div className='mt-2 flex gap-3 items-center'>
                          <h1 className='text-sm text-black font-bold w-22 rounded-[62px] bg-gray-400 flex
                           items-center justify-center'>L</h1>
                <h1 className='text-sm text-black font-bold w-22 rounded-[62px] bg-gray-400
                 flex items-center justify-center'>M</h1>
                         <h1 className='text-sm text-black font-bold w-22 rounded-[62px] bg-gray-400
                 flex items-center justify-center'>XL</h1>
                     </div>
                     

                     <div className='flex gap-4 items-center mt-5'>

                    

                     <div className='p-6 bg-[#F0F0F0] rounded-[62px] mt-5 '>

                      <div className='flex gap-10  items-center'>
                        <FaMinus />

                        <h1>3</h1>
                        <FaPlus />

                      </div>

                     </div>

                     <div  className=' bg-black pt-4 pb-4 pr-40 pl-40 text-white rounded-[62px]'>
                          add to cart
                     </div>

                      </div>

          </div>

        </div>


        </div>
    </div>
  )
}

export default ProductDettels
