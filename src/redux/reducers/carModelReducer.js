

import { GET_CAR_BY_ID } from "../constants/constants";
import initialState from "../initialState";


export const carModelReducer = (state = initialState.model, action ) => {
  switch (action.type) {
    case GET_CAR_BY_ID:
      return action.payload;
  
    default:
      return state;
  }
}