import axios from "axios";

import { GET_CARS } from "../constants/constants";

export const getCars = () => async dispatch => {
  const {data} = await axios.get('http://localhost:4444/api/cars');

  dispatch({
    type: GET_CARS,
    payload: data
  })
}