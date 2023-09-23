import { GET_CAR_BRAND } from "../constants/constants";

import initialState from "../initialState";

export const carBrandReducer = (state=initialState.brand, action) => {
  switch (action.type) {
    case GET_CAR_BRAND:
      return action.payload
  
    default:
      return state
  }
}