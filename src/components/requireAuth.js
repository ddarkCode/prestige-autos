import React from 'react';
import {connect} from 'react-redux';
import  {Redirect} from 'react-router-dom';



function  requireAuth(Component)  {
  function Authenticated(props) {

    switch (props.user) {
      case null:
        return <Redirect to={'/pages/auth/signin'} />
    
      default:
        return <Component {...props} />
    }
  }

  const mapStateToProps  = (state)  => {
    console.log('Map State To Props',state)
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(Authenticated);
}

export default requireAuth;