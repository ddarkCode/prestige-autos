import React from 'react'

import './pageButton.css';

function PageButton({text}) {
  return (
    <div className='page-button-container'>
      <button>{text}</button>
    </div>
  )
}

export default PageButton