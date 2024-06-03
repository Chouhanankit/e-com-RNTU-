import React from 'react'
import ProductList from '../Components/ProductList'

const Products = () => {
  return (
    <div className='bg-gray-200'>
    <h1 className='text-gray-600 py-10 text-center text-3xl font-semibold'>All Products</h1>
    <ProductList/>
    </div>
  )
}

export default Products
