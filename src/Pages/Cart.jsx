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

           { selector.length === 0 ? (

            <div className='text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100'>
                    <h2 className='text-2xl font-semibold text-gray-600'>Your cart is empty</h2>
                    <p className='text-gray-400 mt-2'>Looks like you haven't added anything yet.</p>
                </div>
           ):
           (
           <>
             <div className='border-[#0000001A] border p-3  w-150 rounded-4xl'>
             {
              selector.map((item)=>{
                return  <CartItem
                titles={item.title}
                imgsrc={item.thumbnail}
                price={item.price}
                id={item.id}
                />
              })
             }
           
             
         
              
           </div>
           </>
           )
           }
         
      </div>
    </div>
  )
}

export default Cart
