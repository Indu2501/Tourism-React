import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const NavBar = () => {
  return (
    <div className='navSection'>
        <ul>
            <li>
                <Link to = '/' className='nav-link'>Home</Link>
            </li>
            <li>
                <Link to = '/about' className='nav-link'>About</Link>
            </li>
            <li>
                <Link to= '/services' className='nav-link'>Services</Link>
            </li>
            <li>
                <Link to = '/contact' className='nav-link'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar