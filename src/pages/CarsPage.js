import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getCars} from '../redux/actions/carActions';
import Car from '../components/car/Car';

import './css/carsPage.css';

function CarsPage({cars, getCars}) {

  useEffect(() => {
    getCars()
  }, [])
console.log(cars);
  return (
    <div>
      <h1 className='brand-name'>Car Brand Name</h1>
      <div className='car-brand'>
      {
        cars.slice(0, 7).map(car => <Car key={car._id} {...car} />)
      }
      </div>
      
    </div>
  )
}

const mapStateToProps = ({cars}) => ({cars})
const mapDispatchToProps = {
  getCars
}

export default {
  component:  connect(mapStateToProps, mapDispatchToProps)(CarsPage),
  loadData: ({dispatch}) => dispatch(getCars())
}