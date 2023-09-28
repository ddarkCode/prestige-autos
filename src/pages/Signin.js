import React, {useState} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import InputContainer from '../components/input/InputContainer';
import FormButton from '../components/formButton/FormButton';
import Form from '../components/form/Form';
import {signin} from '../redux/actions/authAction';
import GoogleButton from '../components/googleButton/GoogleButton';


import './css/auth.css'


function Signin({signin, auth}) {
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  function handleChange({target}) {
    const {name, value} = target;
    setUser(prevstate => {
      return {
        ...prevstate,
        [name]: value
      }
    })
  }
  function handleSubmit() {
    try {
      signin(user);
      setUser({ 
        email: '',
        password: ''})
       return history.push('/pages/auth/user');  
    } catch (err) {
      console.log(err);
    }
  }

  switch (auth) {
    case null:
      return (
        <div className='auth'>
          
          <Form handleSubmit={handleSubmit}>
          <h1>Sign In</h1>
            
             <InputContainer type={'email'} name={'email'} value={user.email} onChange={handleChange} />
             <InputContainer type={'password'} name={'password'} value={user.password} onChange={handleChange} />
          
             <FormButton text='Next' />
          </Form>
          <div className='or'>
            <hr/><span>Don't Have An Accounnt?</span><hr/>
            
          </div>
          <Link to='/pages/auth/signup'>Create Account</Link>
          <div className='or google-or'>
            <hr/><span>Or</span><hr/>
            
          </div>
          <GoogleButton/>

         
        </div>
      )
  
    default:
      return <Redirect to={'/pages/auth/user'} />
  }
  
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default {
  component: connect(mapStateToProps, {signin})(Signin)
}