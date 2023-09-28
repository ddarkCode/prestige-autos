import React, {useState} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import InputContainer from '../components/input/InputContainer';
import FormButton from '../components/formButton/FormButton';
import Form from '../components/form/Form';
import { signup } from '../redux/actions/authAction';
import GoogleButton from '../components/googleButton/GoogleButton';

import './css/auth.css'

function Signup(props) {
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    mobile: ''
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
      props.signup(user);
      history.push('/pages/auth/user');
      setUser({  username: '',
      email: '',
      password: '',
      address: '',
      mobile: ''})
    } catch (err) {
      console.log(err);
    }

  }
  switch (props.auth) {
    case null:
      return (
        <div className='auth'>
          
          <Form handleSubmit={handleSubmit}>
          <h1>Sign Up</h1>
             <InputContainer type={'text'} name={'username'} value={user.username} onChange={handleChange} />
             <InputContainer type={'email'} name={'email'} value={user.email} onChange={handleChange} />
             <InputContainer type={'password'} name={'password'} value={user.password} onChange={handleChange} />
             <InputContainer type={'text'} name={'address'} value={user.address} onChange={handleChange} />
             <InputContainer type={'tel'} name={'mobile'} value={user.mobile} onChange={handleChange} />
             <FormButton text='Next' />
          </Form>
          <div className='or'>
            <hr/><span>Already Have An Account?</span><hr/>
            
          </div>
          <Link to='/pages/auth/signin'>Sign In</Link>
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

function mapStateToProps(auth) {
  return {
   auth
  }
}

export default {
  component: connect(mapStateToProps, {signup})(Signup)
}