import axios from "axios";

import { GET_CAR_BY_ID } from "../constants/constants";


export const getCarById = (carId) => async dispatch => {
  const {data} = await axios.get(`https://prestige-autos.onrender.com/api/cars/${carId}`);

  dispatch({
    type: GET_CAR_BY_ID,
    payload: data
  })
}