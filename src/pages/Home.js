import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
      <div style={{textAlign:'center'}}>
        <h1 style={{color:'white'}}>Home</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Home