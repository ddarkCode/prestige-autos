import React from 'react';
import {Link} from 'react-router-dom';

import './Car.css';

function BrandCar({brand, model, year, price,description, imageUrl, _id, imageFile}) {
  console.log(imageFile)
  return (
    <div className='car-container'>
          <div className='car-image-container'><img src={imageUrl} /></div>
           <h5>{brand}{' - '}{model}</h5>
           <p>{description.substring(0, 400)}</p>
           <p>Year: {year}{'  -  '}Price: ${price}</p>
           <Link to={`/pages/brand/${_id}`}>View</Link>
           
        </div>
  )
}

export default BrandCar