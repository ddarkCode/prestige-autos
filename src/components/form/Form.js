import React from 'react';

import './form.css';

function Form(props) {
  function onSubmit(e) {
    e.preventDefault()
    props.handleSubmit()
  }
  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      {props.children}
    </form>
  )
}

export default Form