import React from 'react'
import Banner from '../Components/Banner'
import Scrollballocity from '../Components/Scrollballocity'
import NewAriveals from '../Components/NewAriveals'
import TopSellingProduct from '../Components/TopSellingProduct'
import BrowseDress from '../Components/BrowseDress'
import LatestOffer from '../Components/LatestOffer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Scrollballocity/>
      <NewAriveals/>
      <TopSellingProduct/>
      <BrowseDress/>
      <LatestOffer/>
    </div>
  )
}

export default Home
