import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {upperCase} from 'lodash';


import { getCarBrand } from '../redux/actions/carBrandAction';
import BrandCar from '../components/car/BrandCar';

import './css/carsPage.css';


function CarsPage({brand, getCarBrand}) {
  const location = useLocation();
  useEffect(() => {
   
      getCarBrand(location.search)
   
  }, [])
  const brandName = brand.results ? brand.results[0].brand : 'Loading';
 
  
  return (
    <div>
      <h1 className='brand-name'>{upperCase(brandName)}</h1>
      <div className='car-brand'>
      {
        brand.results ? brand.results.map(car => <BrandCar key={car._id} {...car} />) : null
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