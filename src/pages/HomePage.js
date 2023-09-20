import React from 'react';
import {Link} from 'react-router-dom';

import './css/homePage.css'

function HomePage() {
  return (
    <div className='home-container'>
      <div className='home-info'>
        <h3>The Easiest Way To buy A Car</h3>
        <div>
        <p>Explore The Latest Innovations And Hottest Wheels On Our Car Enthusiast Website!</p>
        <Link to='/pages/explore'>Get Started</Link>
        </div>
      </div>

      <div className='home-image-container' style={{marginTop: '50px'}}>
        <img src='https://hips.hearstapps.com/hmg-prod/images/2024-cadillac-ct4-v-blackwing-100-646e310f59709.jpg?crop=0.697xw:0.589xh;0.293xw,0.235xh&resize=1200:*' />
      </div>

      <div className='car-detail-container'>
          <div className='car-detail-price'>
            <span>Special Price This Year</span>
            <span className='price'>$62,890</span>
          </div>
          <div className='car-detail-specs'>
          <div className='specs'>
            <span>950 MPH</span>
            <span>Top Speed</span>
          </div>
          <div className='specs'>
            <span>50 Litres</span>
            <span>Consumption</span>
          </div>
          <div className='specs'>
            <span>7.0</span>
            <span>Safety Rating</span>
          </div>
          <div className='specs'>
            <span>3.5</span>
            <span>Acceleration</span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default {component:  HomePage}