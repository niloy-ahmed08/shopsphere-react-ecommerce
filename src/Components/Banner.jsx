import React from 'react'
import bannerpic from '../assets/bannerbg.jpg'

const Banner = () => {
  return (
    <div className=' py-25 bg-[#F2F0F1] '>
      <div className="container">

         <div className='flex items-center gap-25'>

             <div>
                <h1 className=' text-[64px] font-bold leading-15 text-black'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='text-[16px] leading-7 text-[#00000099] mt-4'>Browse through our diverse range of meticulously
                     crafted garments, designed to bring out your
                      individuality and cater to your sense of style.</p>
                      <button className='py-4 px-16 bg-black text-white rounded-[62px] mt-5'>Shop Now</button>
                      <div className='flex gap-16 mt-5 '>
                         <div>
                            <h1 className='text-[40px] leading-[100%] text-black font-bold'>200+</h1>
                            <p className='text-[16px] leading-5.5 text-[#00000099] mt-5.5'>International Brands</p>
                         </div>

                             <div>
                            <h1 className='text-[40px] leading-[100%] text-black font-bold'>2000+</h1>
                            <p className='text-[16px] leading-5.5 text-[#00000099] mt-5.5'>International Brands</p>
                         </div>


                             <div>
                            <h1 className='text-[40px] leading-[100%] text-black font-bold'>30000+</h1>
                            <p className='text-[16px] leading-5.5 text-[#00000099] mt-5.5'>International Brands</p>
                         </div>
        
                      </div>
             </div>

             <div>
                <img src={bannerpic} className=' h-165.75 w-[1600px]' alt="" />
             </div>

         </div>


      </div>
       

    </div>
  )
}

export default Banner
