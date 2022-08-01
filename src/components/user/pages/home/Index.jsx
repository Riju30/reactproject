import React from 'react'
import Brand from './Brand'
import Category from './Category'
import Features from './Features'
import HomeCarousel from './HomeCarousel'
import LatestProduct from './LatestProduct'
import RecentView from './RecentView'

const Index = () => {
  return (
    <>
        <HomeCarousel/>
        <Features/>
        <Category/>
        <LatestProduct/>
        <Brand/>
        <RecentView/>
    </>
  )
}

export default Index