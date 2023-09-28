import React from 'react';

import ExploreButton from '../components/exploreButton/ExploreButton';

import './css/aboutPage.css';
 
function AboutPage() {
  return (
    <div className='about-page'> 
      <h1>About Us</h1>
      <div className='about-page-info'>
        <div>WE'RE HERE TO HELP YOU FIND THE PERFECT CAR</div>
        <div>
        <p>We are committed to providing our customers the best possible service at a fair price</p>
        <ExploreButton text={'Learn More'} />
        </div>
      </div>
      <div className='about-page-image-container'>
        <img src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/02/2016-Aston-Martin-DB9-GT-111-876x535.jpg?crop=1.00xw:0.919xh;0,0.0812xh&resize=1200:*' />
      </div>
    </div>
  )
}

export default {component: AboutPage}