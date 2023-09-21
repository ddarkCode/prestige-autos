import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import { getCars } from '../redux/actions/carActions';

import '../index.css'

function ExplorePage({cars, getCars}) {
  useEffect(() => {
    getCars();
  }, [])
  // console.log(cars);
  return (
    <div>
      <h1>This is The Explore Page </h1>
      <div>
        {
        cars.map(car => (
        <div key={car._id} style={{textAlign: 'center'}}>
          <img src={car.image_url} style={{width: '300px', height: '300px'}} />
           <h5>{car.name}</h5>
           <p>{car.model}</p>
           <p>{car.year}</p>
           <p>{car.price}</p>
        </div>))
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