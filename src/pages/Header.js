import React from 'react'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom'
import { BiSolidDashboard } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='navbar'>
      

      <div className='dash'>
        <div className='dashboard' > <BiSolidDashboard/></div>
        <div><li > &nbsp; Dashboard </li></div>
      </div>
      
      {/* <li><Link to='/'>Home</Link></li> */}
      <li>Contactus</li>
      <li>Aboutus</li>
      <li>Blog</li>
      <li>Profile</li>
      
      
      
    </div>
  )
}

export default Header
