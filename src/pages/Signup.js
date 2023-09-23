import React from 'react';
import {Link} from 'react-router-dom';

import InputContainer from '../components/input/InputContainer';
import FormButton from '../components/formButton/FormButton';
import Form from '../components/form/Form';

import './css/auth.css'

function Signup() {
  return (
    <div className='auth'>
      
      <Form>
      <h1>Sign Up</h1>
         <InputContainer type={'text'} name={'username'} />
         <InputContainer type={'email'} name={'email'} />
         <InputContainer type={'password'} name={'password'} />
         <InputContainer type={'text'} name={'address'} />
         <InputContainer type={'tel'} name={'mobile'} />
         <FormButton text='Next' />
      </Form>
      <div className='or'>
        <hr/><span>Or</span><hr/>
        
      </div>
      <Link>Sign In</Link>
    </div>
  )
}

export default {
  component: Signup
}