import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import Card from '../Components/Card'



const Cart = () => {



        const selector = useSelector(state=>state.product.cart)
     
                const subtotals = useSelector(state=>state.product.subtotal)

              console.log(subtotals)

              const discauntparcent = 20 ;
              const deliveryFree = 2 ;

              const discauntamaunt = (subtotals * discauntparcent) / 100 ;

              
              const [promoinput,setpromoinput]=useState('')
              const [promoapplied,setpromoapplied]=useState(false)
              const [promoerror,setpromoerror]=useState('')
              
              const promodiscauntparcent = promoapplied ? 10 : 0;
              
              const promoamaunt = (subtotals * promodiscauntparcent) / 100 ;
              
              const total = subtotals - discauntamaunt - promoamaunt + deliveryFree;

              const handaleapply = ()=>{

               if (promoinput.trim().toLocaleLowerCase() === 'niloy08') {
                setpromoapplied(true)
                setpromoerror(false)
                setpromoinput('')
               }else{
                setpromoapplied(false)
                setpromoerror('invalid promo code')
               }


              }
        
  return (
    <div className='py-10 '>
      <div className="container">
           <h1 className='text-2xl font-bold'>Your Cart</h1>

           <div className=' relative '>

           { selector.length === 0 ? (

            <div className='text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100'>
                    <h2 className='text-2xl font-semibold text-gray-600'>Your cart is empty</h2>
                    <p className='text-gray-400 mt-2'>Looks like you haven't added anything yet.</p>
                </div>
           ):
           (
           <>
             <div className='border-[#0000001A] border p-3  w-[50%]  rounded-4xl'>
             {
              selector.map((item)=>{
                return  <CartItem
                titles={item.title}
                imgsrc={item.thumbnail}
                price={item.price}
                id={item.id}
                quan={item.quan}
                />
              })
             }
           
             
         
              
           </div>
            <div className='p-3 border border-[#0000001A] w-126 rounded-2xl absolute top-0 right-50'>
                      <h1 className='text-2xl font-bold'>Order Summary</h1>
                      <div className='flex justify-between mt-4'>
                        <h1 className='text-gray-400'>Subtotal</h1>
                        <h3>$ {(subtotals).toFixed(0,2)}</h3>
                      </div>
                      <div className='flex justify-between mt-4'>
                        <h1 className='text-gray-400'>Discount (-20%)</h1>
                        <h3>$ {(discauntamaunt).toFixed(0,2)}</h3>
                      </div>
                      <div className='flex justify-between mt-4 border-b border-[#0000001A] pb-5'>
                        <h1 className='text-gray-400'>Delivery Fee</h1>
                        <h3>${deliveryFree}</h3>
                      </div>
                      <div className='flex justify-between mt-4 border-b border-[#0000001A] pb-5'>
                        <h1 className='text-gray-400'>Promo discaunt</h1>
                        <h3>${promodiscauntparcent}</h3>
                      </div>
                      <div className='flex justify-between mt-4'>
                        <h1 className='text-gray-400'>total</h1>
                        <h3>$ {total.toFixed(2)}</h3>
                      </div>
                      <div className='flex mt-4 items-center justify-between'>
                        <input value={promoinput} onChange={(e) => setpromoinput(e.target.value)} type="text" placeholder='add to promo code'  className=' outline-none py-4 px-13 bg-[#F0F0F0] rounded-[62px]' />

                        <button onClick={handaleapply} className='bg-black py-2 px-6 rounded-[62px] text-white'>apply</button>
                      </div>

  {promoerror && <p className='text-red-500 mt-2'>{promoerror}</p>}
  {promoapplied && <p className='text-green-600 mt-2'>Promo code applied!</p>}
                 </div>
           </>
           
          
           )
           }

            {/* <div className='p-3 border border-[#0000001A] w-126 rounded-2xl absolute top-0 right-50'>
                      <h1 className='text-2xl font-bold'>Order Summary</h1>
                      <div className='flex justify-between mt-4'>
                        <h1 className='text-gray-400'>Subtotal</h1>
                        <h3>${(subtotals).toFixed(0,2)}</h3>
                      </div>
                      <div className='flex justify-between mt-4'>
                        <h1 className='text-gray-400'>Discount (-20%)</h1>
                        <h3>${Number(subtotals.toFixed(2)) - 2}</h3>
                      </div>
                      <div className='flex justify-between mt-4 border-b border-[#0000001A] pb-5'>
                        <h1 className='text-gray-400'>Delivery Fee</h1>
                        <h3>$7</h3>
                      </div>
                      <div className='flex justify-between mt-4'>
                        <h1 className='text-gray-400'>total</h1>
                        <h3>$325</h3>
                      </div>
                      <div className='flex mt-4 items-center justify-between'>
                        <button className='py-3 px-30 bg-[#F0F0F0] rounded-[62px]'>Add promo code</button>
                        <button className='bg-black py-2 px-6 rounded-[62px] text-white'>apply</button>
                      </div>
                 </div> */}


         </div>
      </div>
    </div>
  )
}

export default Cart
