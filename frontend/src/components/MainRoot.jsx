import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const MainRoot = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainRoot
