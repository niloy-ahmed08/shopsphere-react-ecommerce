import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Formal = () => {

             const [formal,setformal]=useState([])

           const AllFormalproducts = async ()=>{

                 const formaldata = await axios.get('https://dummyjson.com/products/category/mens-shirts')
                  setformal(formaldata.data.products)
           }

           console.log(formal)

           useEffect(()=>{
            AllFormalproducts()
           },[])

  return (
    <div className='py-20 bg-white'>
      <div className="container">

         <h1 className='text-[45px] font-bold text-center'>Formal Category</h1>
          <div className='mt-7 flex flex-wrap justify-center gap-30'>

            {

              formal.map((item)=>{
                return <Card
                title={item.title}
                price={item.price}
                disparcent={item.price}
                disprice={item.price}
                imgsrc={item.thumbnail}
                />
              })

            }
              
          </div>
      </div>
    </div>
  )
}

export default Formal
