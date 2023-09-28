import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';


import { getCars } from '../redux/actions/carActions';
import PageButton from '../components/pageButton/PageButton';
import Car from '../components/car/Car';


import './css/ExplorePage.css';

function ExplorePage({cars, getCars}) {

  useEffect(() => {
    if (Object.keys(cars).length === 0) {
      getCars();
    }
  }, [])

  return (
    <div className='explore'>
      <div className='explore-info'>
        <h2>HIGHLIGHT STYLE </h2>
        <p>We Understand That Every Event Is Unique, And We Strive To Accommodate Your Individual Needs</p>
      </div>
      <div className='explore-cars'>
        {
          cars.results ? cars.results.map(car => <Car key={car._id} {...car} />) : <h3>Loading</h3>
        }
      </div>

      <div className='pagination'>
        <PageButton text='Previous' />
        <PageButton text='Next' />
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