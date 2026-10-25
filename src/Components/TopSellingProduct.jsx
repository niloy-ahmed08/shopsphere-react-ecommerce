import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { data } from 'react-router';
import Card from './Card';
const TopSellingProduct = () => {

              const [sellingproduct,setsellingproduct]=useState([])

          const AllProductsSelling = async ()=>{


          const datasecond = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')  
                setsellingproduct(datasecond.data)

          }

          console.log(sellingproduct)

        


          useEffect(()=>{
          AllProductsSelling()
          },[])

  return (
    <div className='py-20'>
      <div className="container">

         <h1 className='text-[40px] font-bold text-center'>Top Sellingh Products </h1>

         <div className='flex flex-wrap items-center justify-center gap-40 mt-10'>
            {
                sellingproduct.map((item)=>{
                    return <Card
                       title={(item.title).slice(0,20)}
                       imgsrc={item.images}
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

export default TopSellingProduct
