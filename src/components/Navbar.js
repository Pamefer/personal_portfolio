import React, {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FcCloseUpMode } from 'react-icons/fc';
import title from '../constants/images/welcome.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={title} alt="profile"/>
        </div>
        <ul className='app__navbar-links'>
          <li className="p__opensans"><a href="#home">Home</a> </li>
          <li className="p__opensans"><a href="#about">About</a> </li>
          <li className="p__opensans"><a href="#work">Work</a> </li>
          <li className="p__opensans"><a href="#interest">Interest</a> </li>
          <li className="p__opensans"><a href="#feedback">Feedback</a> </li>
        </ul>
        
          <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
          {toggleMenu &&(
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <FcCloseUpMode fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
              <ul className='app__navbar-smallscreen_links'>
                <li className="p__opensans"><a href="#home">About me</a> </li>
                <li className="p__opensans"><a href="#work">Work</a> </li>
                <li className="p__opensans"><a href="#interest">Interest</a> </li>
                <li className="p__opensans"><a href="#feedback">Feedback</a> </li>
              </ul>
          </div>
          )} 
          </div>
        
    </nav>
  )
}

export default Navbar