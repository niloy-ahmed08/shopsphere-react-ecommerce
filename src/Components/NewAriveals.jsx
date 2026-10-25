import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ProductReducer } from '../Slice/ProductSlice';
import SKelitoon from './SKelitoon';
const NewAriveals = () => {

           const [products,setproducts]=useState([])
           const [Loading,setLoading]=useState(true)
           const dispath = useDispatch()
           const datae = useSelector (  state => state.product.value)
            

            
           const Allproducts = async ()=>{

             const data = await axios.get('https://fakestoreapi.com/products')
             dispath(ProductReducer(data.data))
             setLoading(false)
             
             setproducts(data.data)
           }

           console.log(products)

            useEffect(()=>{
              Allproducts()
            },[])


            const unickcategory = [...new Set(datae.map((item)=>item.category))]
            const handalecategory = (item)=>{

               let categorybycategory = products.filter((items)=>items.category === item);
                   dispath(ProductReducer(categorybycategory))
                   
            };

  return (
    <div className='py-18 bg-white  '>
      <div className="container">
        <div>

             

            <h1 className='text-[48px] font-bold  text-center '>NEW ARRIVALS</h1>
              {/* <li onClick={()=>(dispath(ProductReducer((products))))}></li> */}
                <ul className=' flex items-center gap-10 justify-center'>

                {
                  unickcategory.map((item)=>{
                    return <li className='  rounded-2xl justify-center bg-[#F0EEED] p-2 text-black flex items-center mt-10' onClick={()=>handalecategory(item)}>{item}</li>
                  })
                }
                </ul>

                {
                  Loading ?<div className='mt-13   justify-center  flex flex-wrap items-center gap-30 '>

                       <>
                       <SKelitoon/>
                       <SKelitoon/>
                       <SKelitoon/>
                       
                       </>

                  </div>
                  :
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
              
                }
            
              <div>
                {/* {
                  products.map((item)=>{
                    return <li className=' list-none'>{item.category}</li>
                  })
                } */}
              
              </div>

            </div>
      </div>
    </div>
  )
}

export default NewAriveals
