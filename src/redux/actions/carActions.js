import axios from "axios";

import { GET_CARS, ADD_NEW_CAR } from "../constants/constants";

export const getCars = () => async dispatch => {
  const {data} = await axios.get('http://localhost:4444/api/cars');

  dispatch({
    type: GET_CARS,
    payload: data
  })
}

export const addNewCar = (newCar) => async dispatch => {
  console.log('New Car Before Been Posted: ', newCar);
  const {data} = await axios.post('http://localhost:4444/api/cars', newCar);
  console.log('Car Action Data: ', data);

  dispatch({
    type: ADD_NEW_CAR,
    payload: data
  })
}