import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../redux/actions/authAction';

import Logo from '../Logo';

import './Header.css';
 
function Header({auth, signout}) {
  let role;
  if (auth) {
    role = auth.role
  }
  const history = useHistory()
  function logout() {
    signout()
    history.push('/')
  }
  return (
    <header>
      <nav>
        <Logo/>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/pages/explore'>Explore</Link></li>
         {
          auth ?  <li><Link to='/pages/auth/user'>Profile</Link></li> : null
         }
          {
            role === 'admin' ? <li><Link to='/pages/new/new-car' >Add Car</Link></li> : ''
          }
          {
            auth ? <li><button style={{fontWeight: '100', fontSize: '12px'}} onClick={logout}>Sign out</button></li> : <li><Link to='/pages/auth/login'>Signin</Link></li>
          }
         
          <li><Link to='/pages/about'>About</Link></li>
          <li><Link to='/pages/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {signout})(Header)