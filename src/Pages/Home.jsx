import React from 'react'
import Banner from '../Components/Banner'
import Scrollballocity from '../Components/Scrollballocity'
import NewAriveals from '../Components/NewAriveals'
import TopSellingProduct from '../Components/TopSellingProduct'
import BrowseDress from '../Components/BrowseDress'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Scrollballocity/>
      <NewAriveals/>
      <TopSellingProduct/>
      <BrowseDress/>
    </div>
  )
}

export default Home
