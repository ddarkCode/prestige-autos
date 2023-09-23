import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {upperCase} from 'lodash';


import { getCarBrand } from '../redux/actions/carBrandAction';
import Car from '../components/car/Car';
import BrandCar from '../components/car/BrandCar';

import './css/carsPage.css';


function CarsPage({brand, getCarBrand}) {
  const location = useLocation();
  useEffect(() => {
    getCarBrand(location.search)
  }, [])
  const car = brand[0]

  
  return (
    <div>
      <h1 className='brand-name'>{upperCase(car.brand)}</h1>
      <div className='car-brand'>
      {
        brand.map(car => <BrandCar key={car._id} {...car} />)
      }
      </div>
      
    </div>
  )
}

const mapStateToProps = ({brand}) => ({brand})
const mapDispatchToProps = {
  getCarBrand
}

export default {
  component:  connect(mapStateToProps, mapDispatchToProps)(CarsPage),
  loadData: (store, query) => store.dispatch(getCarBrand(query))
 
}