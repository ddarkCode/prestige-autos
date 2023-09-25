import React, {useState} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import InputContainer from '../components/input/InputContainer';
import FormButton from '../components/formButton/FormButton';
import Form from '../components/form/Form';
import {signin} from '../redux/actions/authAction'

import './css/auth.css'

function Signin({signin, user}) {
  const history = useHistory()

  const [sUser, setSUser] = useState({
    email: '',
    password: ''
  })

  function handleChange({target}) {
    const {name, value} = target;
    setSUser(prevstate => {
      return {
        ...prevstate,
        [name]: value
      }
    })
  }
  function handleSubmit() {
    try {
      signin(sUser);
      setSUser({ 
        email: '',
        password: ''})
       return history.push('/pages/auth/user');  
    } catch (err) {
      console.log(err);
    }
  }

  switch (user) {
    case null:
      return (
        <div className='auth'>
          
          <Form handleSubmit={handleSubmit}>
          <h1>Sign In</h1>
            
             <InputContainer type={'email'} name={'email'} value={sUser.email} onChange={handleChange} />
             <InputContainer type={'password'} name={'password'} value={sUser.password} onChange={handleChange} />
          
             <FormButton text='Next' />
          </Form>
          <div className='or'>
            <hr/><span>Or</span><hr/>
            
          </div>
          <Link to='/pages/auth/signup'>Create Account</Link>
        </div>
      )
  
    default:
      return <Redirect to={'/pages/auth/user'} />
  }
  
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default {
  component: connect(mapStateToProps, {signin})(Signin)
}