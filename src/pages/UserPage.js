import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ExploreButton from '../components/exploreButton/ExploreButton';

import requireAuth from '../components/requireAuth';

function UserPage(props) {
  let auth = props.auth
  
 
  return (
    <div style={{height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontSize: '30px', fontWeight: '700', marginBottom: '50px'}}><span style={{marginRight:  '40px'}}>Welcome</span>{auth ? auth.username : ''}</h1>
      <p style={{marginBottom: '50px', fontSize: '21px'}}>Continue To The Explore Page To Find Out Which Car Suits You The Best.</p>
      <div style={{textAlign: 'center'}} ><ExploreButton text='Explore' /></div>
    </div>
  )
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default {
  component: connect(mapStateToProps)(requireAuth(UserPage))
}