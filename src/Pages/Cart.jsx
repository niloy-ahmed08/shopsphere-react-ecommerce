import React from 'react'

import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import Card from '../Components/Card'



const Cart = () => {



        const selector = useSelector(state=>state.product.cart)
     
         
      
        
  return (
    <div className='py-10 '>
      <div className="container">
           <h1 className='text-2xl font-bold'>Your Cart</h1>
           <div className='border-[#0000001A] border p-3  w-150 rounded-4xl'>
             {
              selector.map((item)=>{
                return  <CartItem
                titles={item.title}
                imgsrc={item.thumbnail}
                price={item.price}
                />
              })
             }
           
             
         
              
           </div>
      </div>
    </div>
  )
}

export default Cart
