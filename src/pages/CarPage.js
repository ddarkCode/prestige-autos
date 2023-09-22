import React from 'react'

import './css/carPage.css'

function CarPage() {
  return (
    <div>
      <h1>Model X</h1>
      <div className='model-details'>
      <div className='model-details-image-container'>
        <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Specs-Desktop_Mobile-Global.jpg' />
      </div>
      <div className='model-details-info'>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
           and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <p>2024</p>
        <p>$90,000</p>
      </div>
      </div>
    </div>
  )
}

export default {
  component: CarPage
}