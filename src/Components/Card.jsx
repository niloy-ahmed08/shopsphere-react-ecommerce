import React from 'react'
import tshart from '../assets/tshart.png'
import { Rate } from 'antd';
const Card = ({imgsrc,title,price,disprice,disparcent}) => {
  return (
    <div>

        <div>
            <img src={imgsrc} className='w-73.75 h-70' alt="" />
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
      
    </div>
  )
}

export default Card
