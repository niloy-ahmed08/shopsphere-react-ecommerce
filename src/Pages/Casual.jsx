import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Components/Card';
const Casual = () => {

          const[casualproduct,setcasualproduct]=useState([])

            

            

    const CasualproductsAll = async ()=>{


        const casualdata = await axios.get('https://dummyjson.com/products/category/mens-shirts?limit=80')
            setcasualproduct(casualdata.data.products)
    }

      console.log(casualproduct)

      const unickcategorycasual = [...new Set(casualproduct.map((item)=>item.category))]


    useEffect(()=>{
        CasualproductsAll()
    },[])



  return (
    <div className='py-25 bg-white'>
      <div className="container">

        <div>
            <h1 className='text-[45px] font-bold text-center'>Casual Category</h1>

            <div className='mt-7'>
                <ul className='text-sm font-bold text-gray-400 mt-4 flex gap-10 justify-center'>
                  {
                    unickcategorycasual.map((item)=>{
                      return<li className=' bg-[#F0EEED] p-2 rounded-xl'>{item}</li>

                    })

                  }
                        {/* <li className=' bg-[#F0EEED] p-2 rounded-xl'>Printed T-Shirt</li>
                            <li className=' bg-[#F0EEED] p-2 rounded-xl'>Printed T-Shirt</li>
                                <li className=' bg-[#F0EEED] p-2 rounded-xl'>Printed T-Shirt</li> */}
                </ul>

                   <div className='flex flex-wrap mt-10 gap-30 justify-center'>
                       {
                        casualproduct.map((item)=>{
                          return <Card

                          title  ={item.title}
                          price={item.price}
                          disparcent={item.discountPercentage}
                          disprice={item.price}
                          imgsrc={item.thumbnail}
                          />
                        })
                       }
                   </div>


            </div>
        </div>
      </div>
    </div>
  )
}

export default Casual
