import {combineReducers} from 'redux';

import { carsReducer } from "./reducers/carsReducer";
import { carBrandReducer } from './reducers/carBrandReducer';
import { carModelReducer } from './reducers/carModelReducer';



const reducers = combineReducers({
  cars: carsReducer,
  brand: carBrandReducer,
  model: carModelReducer
})

export default reducers;