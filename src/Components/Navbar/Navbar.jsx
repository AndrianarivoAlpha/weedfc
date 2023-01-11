import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbMenu, TbX } from "react-icons/tb";
import {
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlinePhone,
  AiOutlineHeart
} from 'react-icons/ai'
import Logo from '../Logo/Logo';


const Navbar = () => {

  const [hamburgerActive, setHamburgerActive] = useState(true)
  const tabMenu = () => {
    setHamburgerActive(!hamburgerActive)
  }

  const hamburgerBtn = hamburgerActive ? (<TbMenu className='hamburger' onClick={() => tabMenu()} />) 
  : (<TbX className='hamburger' onClick={() => tabMenu()} />)
  
  return (
    <div className="navigation-div">
      {
        hamburgerActive === false && 
        <div className='nav-list' onMouseLeave={() => tabMenu()}>
            <Link to="/" className='nav-item'>
              <AiOutlineHome className='nav-icon'/>
              <span>acceuil</span>
            </Link>

            <Link to="/" className='nav-item' onClick={() => setHamburgerActive(!hamburgerActive)}>
              <AiOutlinePicture className='nav-icon'/>
              <span>gallerie</span>
            </Link>

            <Link to="/" className='nav-item' onClick={() => setHamburgerActive(!hamburgerActive)}>
              <AiOutlinePhone className='nav-icon'/>
              <span>Nous contacter</span>
            </Link>

            <Link to="/" className='nav-item' onClick={() => setHamburgerActive(!hamburgerActive)}>
              <AiOutlineHeart className='nav-icon'/>
              <span>Support</span>
            </Link>
        </div>

      }
  
      <nav className='navbar-container' >
        <Logo />
        {
          hamburgerBtn
        }
      </nav>
    </div>
    
  )
}

export default Navbar