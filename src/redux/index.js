import {combineReducers} from 'redux';

import { carsReducer } from "./reducers/carsReducer";


const reducers = combineReducers({
  cars: carsReducer
})

export default reducers;