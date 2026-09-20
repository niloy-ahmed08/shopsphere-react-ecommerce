import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './Components/NavBar'
import HeaDer from './Components/HeaDer'
import Footer from './Components/Footer'
const RootLayout = () => {
  return (
    <div>
      <HeaDer/>
      <NavBar/>
      <Outlet/>
       <Footer/>
    </div>
  )
}

export default RootLayout
