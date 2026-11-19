import React, { useState } from 'react'
import imgsinup from '../assets/Sinup.png'
import { IoMdEye } from 'react-icons/io'
import {  toast,  Bounce } from 'react-toastify';
import { IoEyeOffSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router';
const Singup = () => {

    const [email,setemail]=useState('')
    const [Passwords,setpasswords]=useState('')

    const navigate = useNavigate()
   
     const [eyeshow,seteyeshow]=useState(false)
       let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

               let haserror = false ;

                const Loginsuccesess = ()=>{
    toast.success('Your Login Succsessfully', {
position: "top-center",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }

    const passwordvalidregexnotify = ()=>{
    toast.warn('enter password charctor upper lower ,special,and number 8 long', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }

   const notifyemail = ()=>{

   toast.error('plese enter email', {
position: "top-right",
autoClose: 996,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }

           const handalesinup = (e)=>{
            e.preventDefault()
            
            if (email == '') {
             
                notifyemail()
                haserror = true;
            }else if (!emailregex.test(email)) {
                  notifyemail()
                  haserror = true;
            }

            if (Passwords === '') {
               passwordvalidregexnotify()
                 haserror = true;
            }else if (!passwordregex.test(Passwords)) {
                 passwordvalidregexnotify()
                   haserror = true;
            }

            if (haserror) {
                return
            }

            Loginsuccesess()

            setemail('')
            setpasswords('')

            setTimeout(()=>{
               navigate('/newarrivales')
            },1200)


           }


  return (
    <>
       <div className=' py-7 lg:py-30 '>
        <div className='container'>

          <div className=' flex  gap-6 lg:gap-32.5 items-center justify-center'>

            <div className=''>
              <img src={imgsinup} alt="" />
            </div>

            <div>

              <h1 className='lg:text-2xl text-xl font-semibold text-black mt-1 lg:mt-2.5'>Sinup to Exclusive</h1>
              <p className='text-sm font-medium text-gray-400 mt-2 lg:mt-4'>Enter your details below</p>
              <div className='border-b-2 mt-6 lg:mt-12 border-gray-400 '>
                <input value={email} onFocus={()=>setemailvalue('')} onChange={(e)=>setemail(e.target.value)}  className=' outline-none'  type="text" placeholder='Email or phone number' />
                
              </div>

              <div className='border-b-2  mt-10 mb-10 relative border-gray-400'>
                <input value={Passwords}   type={ eyeshow? 'text' : 'password'} onFocus={()=>setpasswordvalue('')} onChange={(e)=>setpasswords(e.target.value)} className=' outline-none '      placeholder='Password' />
                   {
                    eyeshow ?
                     <IoMdEye onClick={()=>seteyeshow(!eyeshow)} className=' absolute text-2xl  top-0 -right-2' />
                     :
                      <IoEyeOffSharp onClick={()=>seteyeshow(!eyeshow)} className=' absolute text-2xl   top-0 -right-1'  />
                   }
               
              
                
          
              </div>
            
              <button onClick={handalesinup} className='cursor-pointer bg-primary bg-red-400 text-black py-4 px-12 rounded-sm'>Sinup</button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Singup
