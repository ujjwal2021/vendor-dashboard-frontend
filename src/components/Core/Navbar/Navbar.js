import React from 'react'
import "./navbar.css"
import { FaBars, FaBell } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='navbar-container p-x-xl light-bg-900'>
        <div className='navbar-left-container'>
          <div className='navbar-icon navbar-left-icon h3 dark-500 click'>
              <FaBars/>
          </div> 
          <div className='h1 primary-500 font-bold'>Bims</div> 
        </div>
        <div className='navbar-right-container'>
            <div className='navbar-right-icon primary-500 h4 click'>
              <FaBell/>
              <div className='notif-count-abs light-900 error-bg h6 font-semibold'>
                2
              </div>
            </div>
            <div className='dark-500 h6'>Omar Travels</div>
        </div>
   
    
    </div>
  )
}

export default Navbar