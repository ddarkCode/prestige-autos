import React from 'react';
import {Link} from 'react-router-dom';

import './ExploreButton.css';

function ExploreButton({text}) {
  return (
    <Link className='exploreButton' to='/pages/explore'>{text}</Link>
  )
}

export default ExploreButton;