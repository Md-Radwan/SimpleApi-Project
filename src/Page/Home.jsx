import React from 'react'
import Footer from "../component/Footer"
import MainCard from "../component/MainCard"
import Navbar from "../component/Navbar"
import ProductDetails from "../Page/ProductDetails"

const Home = () => {
  return (
    <>
      <Navbar />
      <MainCard />
      <ProductDetails /> 
      <Footer />
    </>
  )
}

export default Home
