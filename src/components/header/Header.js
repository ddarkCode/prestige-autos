import React from 'react';
import {Link} from 'react-router-dom'

import Logo from '../Logo';

import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <Logo/>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/pages/explore'>Explore</Link></li>
          <li><Link to='/pages/cars'>Cars</Link></li>
          <li><Link to='/pages/about'>About</Link></li>
          <li><Link to='/pages/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header