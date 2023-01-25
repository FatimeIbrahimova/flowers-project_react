import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <>
      <div className='nav'>
       <div className='container'>
       <div className='nav-left'>
          <h1>Floral Studio</h1>
        </div>
        <div className='nav-right'>
          <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/add"><li>Add</li></NavLink>
            <NavLink to="/about"><li>About Us</li></NavLink>
            <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
            <NavLink to="/pricing"><li>Pricing</li></NavLink>
            <NavLink to="/contact"><li>Contacts</li></NavLink>
          </ul>
        </div>
       </div>
      </div>
    </>
  )
}

export default Navbar
