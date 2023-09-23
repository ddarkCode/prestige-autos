import React from 'react';
import {capitalize} from 'lodash';

import './inputContainer.css'

function InputContainer({type, name, value, onChange}) {
  return (
    <div className='input-container'>
          <label htmlFor={name}>{capitalize(name)}</label>
          <input type={type} name={name} id={name} value={value} onChange={onChange} />
        </div>
  )
}

export default InputContainer