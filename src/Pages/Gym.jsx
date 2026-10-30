import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GymProducts } from '../Slice/ProductSlice'
import Card from '../Components/Card'
import Skelitoons from '../Components/Skelitoons'

const Gym = () => {

              const [loading,setloading]=useState([])
           const dispatch = useDispatch()   
           const selector = useSelector(state =>state.product.value)   
            console.log(selector)
         const GymAllproducts = async ()=>{

            const gymdata = await axios.get('https://dummyjson.com/products/category/sports-accessories')

              dispatch(GymProducts(gymdata.data.products))
              setloading(false)
         }

         useEffect(()=>{
            GymAllproducts()
         },[])
  return (
    <div className='py-10'>
      <div className="container">
        
             <h1 className='text-[45px] font-bold text-center'>Gym Category</h1>

               <div >
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
                 : <div className='flex flex-wrap items-center gap-20  justify-center-safe mt-10'>

                    {
                    selector.map((item)=>{
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
               }
                
               </div>

      </div>
    </div>
  )
}

export default Gym
