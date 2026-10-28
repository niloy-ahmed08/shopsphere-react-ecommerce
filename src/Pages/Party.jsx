
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Party = () => {

    const [partypdct,setpartypdct]=useState([])
     
    const Partyallproducts = async ()=>{

        const partydata = await axios.get('https://dummyjson.com/products/category/mens-shirts')

           setpartypdct(partydata.data.products)

    }

    console.log(partypdct)

    useEffect(()=>{
        Partyallproducts()
    },[])


  return (
    <div className='py-10 '>
      <div className="container">

             <h1 className='text-[45px] font-bold text-center'>pARTY Category</h1>
                 <div className='flex justify-between gap-10 mt-10 flex-wrap'>
                    {
                     partypdct.map((item)=>{
                        return  <Card
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

export default Party
