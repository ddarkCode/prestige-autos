import React from 'react';
import {Link} from 'react-router-dom';

import InputContainer from '../components/input/InputContainer';
import FormButton from '../components/formButton/FormButton';
import Form from '../components/form/Form';

import './css/auth.css'

function Signin() {
  return (
    <div className='auth'>
      
      <Form>
      <h1>Sign In</h1>
        
         <InputContainer type={'email'} name={'email'} />
         <InputContainer type={'password'} name={'password'} />
      
         <FormButton text='Next' />
      </Form>
      <div className='or'>
        <hr/><span>Or</span><hr/>
        
      </div>
      <Link>Create Account</Link>
    </div>
  )
}

export default {
  component: Signin
}