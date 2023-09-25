import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import './Car.css';

function Car({brand, model, year, price,description, imageUrl, _id, imageFile}) {
  const [imageBlob, setImageBlob] = useState(null);
useEffect(() => {
if (imageFile) {
  const binaryData = new Uint8Array(imageFile.data);
  const blob = new Blob([binaryData], { type: imageFile.contentType });
  const newImageBlob = URL.createObjectURL(blob);
  setImageBlob(newImageBlob)

  return () => URL.revokeObjectURL(newImageBlob);
}
}, [imageFile])
  console.log(imageBlob)
  return (
    <div className='car-container'>
          <div className='car-image-container'><img src={imageUrl} /></div>
          <div className='car-image-container'><img src={imageBlob} /></div>
           <h5>{brand}{' - '}{model}</h5>
           <p>{description.substring(0, 400)}</p>
           <p>Year: {year}{'  -  '}Price: ${price}</p>
           <Link to={`/pages/cars/?brand=${brand}`}>Explore</Link>
           
        </div>
  )
}

export default Car