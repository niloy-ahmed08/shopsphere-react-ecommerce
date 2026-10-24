import React from 'react'
import casual from'../assets/casualty.png'
import formal from'../assets/formal.png'
import gym from'../assets/gym.png'
import party from'../assets/party.png'
const BrowseDress = () => {
  return (
    <div className='py-25'>
      <div className="container">

        <div className=' bg-[#F0F0F0] rounded-[40px] p-18'>

             <h1 className='text-[45px] font-bold text-center'>BROWSE BY dress STYLE</h1>

             <div className='flex  gap-10 justify-center mt-16'>
                <div>
                    <img src={casual} alt=""  className=''/>
                </div>
                <div>
                    <img src={formal} alt=""  className=''/>
                </div>
             </div>
              <div className='flex  gap-10 justify-center mt-4'>
                <div>
                    <img src={party} alt=""  className=''/>
                </div>
                <div>
                    <img src={gym} alt=""  className=''/>
                </div>
             </div>
        </div>

            

      </div>
    </div>
  )
}

export default BrowseDress
