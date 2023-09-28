import {combineReducers} from 'redux';

import { carsReducer } from "./reducers/carsReducer";
import { carBrandReducer } from './reducers/carBrandReducer';
import { carModelReducer } from './reducers/carModelReducer';
import { authReducer } from './reducers/authReducer';



const reducers = combineReducers({
  cars: carsReducer,
  brand: carBrandReducer,
  model: carModelReducer,
  auth: authReducer
})

export default reducers;