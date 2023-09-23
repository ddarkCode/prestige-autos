import axios from "axios";

import { GET_CAR_BY_ID } from "../constants/constants";


export const getCarById = (carId) => async dispatch => {
  const {data} = await axios.get(`http://localhost:4444/api/cars/${carId}`);

  dispatch({
    type: GET_CAR_BY_ID,
    payload: data
  })
}