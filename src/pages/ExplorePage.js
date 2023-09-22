import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {shuffle} from 'lodash';

import { getCars } from '../redux/actions/carActions';
import Car from '../components/car/Car';


import './css/ExplorePage.css';

function ExplorePage({cars, getCars}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowWidth);
    return () => window.removeEventListener('resize', handleWindowWidth)
  }, [])

  useEffect(() => {
    getCars();
  }, [])

  return (
    <div className='explore' style={{height: `${ windowWidth <= 975 ? 470 * cars.length : windowWidth <= 1200 ? 600 *  (cars.length /2) : 500 * (cars.length/3)}`+'px'}}>
      <div className='explore-info'>
      <h2>HIGHLIGHT STYLE </h2>
      <p>We Understand That Every Event Is Unique, And We Strive To Accommodate Your Individual Needs</p>
      </div>
      <div className='explore-cars'>
        {
        shuffle(cars).map(car => <Car key={car._id} {...car} />)
      }
      </div>
      
    </div>
  )
}

const mapStateToProps = ({cars}) => {
  return {
    cars
  }
}

const mapDsipatchToProps = {
  getCars
}

export default {
  component:  connect(mapStateToProps, mapDsipatchToProps)(ExplorePage),
  loadData: ({dispatch}) => dispatch(getCars())
}