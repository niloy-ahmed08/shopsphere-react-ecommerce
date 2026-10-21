import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
const NewAriveals = () => {

           const [products,setproducts]=useState([])

            
           const Allproducts = async ()=>{

             const data = await axios.get('https://fakestoreapi.com/products')
                  setproducts(data.data)
           }

           console.log(products)

            useEffect(()=>{
              Allproducts()
            },[])

  return (
    <div className='py-18 bg-white  '>
      <div className="container">

            <h1 className='text-[48px] font-bold  text-center'>NEW ARRIVALS</h1>
             <div className='mt-10   justify-center  flex flex-wrap items-center gap-30 '>

              { 
                products.map((item)=>{
                  
                  return <Card
                  imgsrc={item.image}
                  title={(item.title).slice(0,12)}
                  price={item.price}
                  disparcent={item.price}
                  disprice={item.price}
                  />
                })
                
              }
                    
             </div>
      </div>
    </div>
  )
}

export default NewAriveals
