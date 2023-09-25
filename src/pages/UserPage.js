import React from 'react';
import {connect} from 'react-redux';

import requireAuth from '../components/requireAuth';

function UserPage(props) {
  console.log('UserPage Props', props);
 
  return (
    <div>
      <h1 style={{fontSize: '30px', fontWeight: '700'}}><span style={{marginRight:  '40px'}}>Welcome</span>{props.user.username}</h1>
    </div>
  )
}

function mapStateToProps({user}) {
  return {
    user
  }
}

export default {
  component: connect(mapStateToProps)(requireAuth(UserPage))
}