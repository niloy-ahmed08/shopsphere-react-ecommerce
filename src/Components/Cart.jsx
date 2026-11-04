import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {



     const datae = useSelector (  state => state.product.value)

         console.log(datae)
  return (
    <div className='py-10 '>
      <div className="container">
           <h1 className='text-2xl font-bold'>Your Cart</h1>
           <div className='border-[#0000001A] border p-3  w-150 rounded-4xl'>

                {
                    datae.map((item)=>{
                        return  <CartItem 
                        
                        title={item.title}
                        price={item.price}
                        imgsrc={item.thumbnail}
                        />
                    })
                }
         
              
           </div>
      </div>
    </div>
  )
}

export default Cart
