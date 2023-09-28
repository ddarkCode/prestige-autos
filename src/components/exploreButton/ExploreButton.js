import React from 'react';
import {Link} from 'react-router-dom';

import './ExploreButton.css';

function ExploreButton({text, styles}) {
  return (
    <Link className='exploreButton' styles={styles} to='/pages/explore'>{text}</Link>
  )
}

export default ExploreButton;