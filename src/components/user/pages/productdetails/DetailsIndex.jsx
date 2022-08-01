import React from 'react'
import Banner from '../../common/Banner'
import Description from './Description'
import ProductArea from './ProductArea'

const DetailsIndex = () => {
  return (
    <>
       <Banner title="Product Details Page" root="Home" parent="Shop" child='product-details'/>
       <ProductArea/>
       <Description/>
    </>
  )
}

export default DetailsIndex