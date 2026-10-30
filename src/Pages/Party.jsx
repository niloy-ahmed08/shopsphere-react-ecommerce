
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Skelitoons from '../Components/Skelitoons'

const Party = () => {

    const [partypdct,setpartypdct]=useState([])
               const [loading,setloading]=useState([])
    const Partyallproducts = async ()=>{

        const partydata = await axios.get('https://dummyjson.com/products/category/womens-dresses?limit=90')

           setpartypdct(partydata.data.products)
           setloading(false)

    }

    console.log(partypdct)

    useEffect(()=>{
        Partyallproducts()
    },[])


  return (
    <div className='py-10 '>
      <div className="container">

             <h1 className='text-[45px] font-bold text-center'>pARTY Category</h1>

             {
              loading ? <div className='flex flex-wrap items-center gap-20  justify-center-safe mt-10'>

                  <Skelitoons/>
                    <Skelitoons/>
                      <Skelitoons/>
                        <Skelitoons/>
                          <Skelitoons/>
                            <Skelitoons/>
                              <Skelitoons/>
                              <Skelitoons/>
                              <Skelitoons/>
                              <Skelitoons/>
                              <Skelitoons/>
               </div>
               : <div className='flex  justify-center gap-30 mt-10 flex-wrap'>
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
             }
                
      </div>
    </div>
  )
}

export default Party
