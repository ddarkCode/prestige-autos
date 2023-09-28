import axios from "axios";

import { GET_CARS, ADD_NEW_CAR } from "../constants/constants";

export const getCars = () => async dispatch => {
  const {data} = await axios.get('https://prestige-autos.onrender.com/api/cars');

  dispatch({
    type: GET_CARS,
    payload: data
  })
}

export const addNewCar = (newCar) => async dispatch => {
  console.log('New Car Before Been Posted: ', newCar);
  const {data} = await axios.post('https://prestige-autos.onrender.com/api/cars', newCar, 
 {
    headers: { 'Content-Type': 'multipart/form-data' },
  }
    );
    console.log('Data From Post: ', data)

  dispatch({
    type: ADD_NEW_CAR,
    payload: data
  })
}