import React from 'react'
import {connect} from 'react-redux';

import { signinWithGoogle } from '../../redux/actions/authAction';

import './googleButton.css'

function GoogleButton({signinWithGoogle}) {
  return (
    <div className='google-button' onClick={signinWithGoogle}>
      <img src='/images/google.png' alt='google-icon' />
      <span>Sign in with Google</span>
    </div>
  )
}

const mapDispatchToProps = {
  signinWithGoogle
}

export default connect(null, mapDispatchToProps)(GoogleButton)