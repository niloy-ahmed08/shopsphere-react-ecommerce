import React from 'react'
import Banner from '../Components/Banner'
import Scrollballocity from '../Components/Scrollballocity'
import NewAriveals from '../Components/NewAriveals'
import TopSellingProduct from '../Components/TopSellingProduct'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Scrollballocity/>
      <NewAriveals/>
      <TopSellingProduct/>
    </div>
  )
}

export default Home
