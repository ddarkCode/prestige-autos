import axios from "axios";

import { GET_CAR_BRAND } from "../constants/constants";


export function getCarBrand(query) {
  return async function(dispatch) {
    const {data} = await axios.get(`https://prestige-autos.onrender.com/api/cars/${query}`);

    dispatch({
      type: GET_CAR_BRAND,
      payload: data
    })
  }
}