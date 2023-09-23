import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {upperCase} from 'lodash';

import { getCarById } from '../redux/actions/carModelAction'

import './css/carPage.css'
 
function CarModelPage({model, getCarById}) {
  const location = useLocation();
  const carId = location.pathname.split('/')[3];
  useEffect(() => {
    getCarById(carId);
  }, [])
  return (
    <div>
      <h1>{upperCase(model.brand)}</h1>
      <h2>{upperCase(model.model)}</h2>
      <div className='model-details'>
      <div className='model-details-image-container'>
        <img src={`${model.imageUrl}`} />
      </div>
      <div className='model-details-info'>
        <p>{`${model.description}`}</p>
        <p>Year: {' - '}  {model.year}</p>
        <p>Price: {' - $'} {model.price}</p>
       
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({model}) => {
  return {
model
  }
}
const mapDispatchToProps = {
  getCarById
}
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(CarModelPage),
  loadData: (store, query,carId) => store.dispatch(getCarById(carId))
}