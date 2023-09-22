import React from 'react';
import {Link} from 'react-router-dom';

import './Car.css';

function Car({name, model, year, price, image_url, _id}) {
  return (
    <div className='car-container'>
          <div className='car-image-container'><img src={image_url} /></div>
           <h5>{name}-{model}</h5>
           <p>With It's Aerodynamin Curves and Bold Lines, This Car Is A Standout On The Road, Turning Heads And Making A Statement Wherever It Goes</p>
           <p>Year: {year}{'   '}-{'   '}Price: ${price}</p>
           <Link to={`/pages/cars/${_id}`}>Explore</Link>
           
        </div>
  )
}

export default Car