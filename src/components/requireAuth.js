import React from 'react';
import {connect} from 'react-redux';
import  {Redirect} from 'react-router-dom';



function  requireAuth(Component)  {
  function Authenticated(props) {

    switch (props.auth) {
      case null:
        return <Redirect to={'/pages/auth/login'} />
    
      default:
        return <Component {...props} />
    }
  }

  const mapStateToProps  = ({auth})  => {
    return {
      auth
    }
  }

  return connect(mapStateToProps)(Authenticated);
}

export default requireAuth;