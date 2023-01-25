import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer=left'>
          <h3>Mary Bryd</h3>
        </div>
        <div className='about'>
          <h2>About</h2>
          <ul>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className='contact'>
          <h2>Contact</h2>
          <ul>
            <li>Contact Us</li>
            <li>FAQ Page</li>
            <li>About Me</li>
          </ul>
        </div>
        <div className='follow'>
          <h2>Follow Us</h2>
        </div>
      </div>
    </>
  )
}

export default Footer
