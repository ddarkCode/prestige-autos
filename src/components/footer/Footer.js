import React from 'react'
import { Twitter, Facebook,Linkedin } from 'react-bootstrap-icons';

import Logo from '../Logo';
import './Footer.css';

function Footer() {
  return (
    <footer>

      <div className='footer-logo'>
        <Logo/>
        <div>
        <span><Facebook size={25} /></span>
        <span><Twitter size={25} /></span>
        <span><Linkedin size={25} /></span>
        </div>
      </div>

      <div className='footer-info'>
        <div>
          <h4>Menu</h4>
          <span>About Us</span>
          <span>Newsroom</span>
          <span>Careers</span>
          <span>Partnership</span>
        </div>
        <div>
          <h4>Get Help</h4>
          <span>Support Career</span>
          <span>24h Service</span>
          <span>Quick Chat</span>
          
        </div>
        <div>
          <h4>Support</h4>
          <span>FAQ</span>
          <span>Policy</span>
          <span>Business</span>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer