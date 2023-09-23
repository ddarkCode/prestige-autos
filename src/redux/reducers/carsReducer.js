import { GET_CARS, ADD_NEW_CAR } from "../constants/constants";
import initialState from "../initialState";

export const carsReducer = (state = initialState.cars, action) => {
  switch (action.type) {
    case GET_CARS:
      return action.payload;

    case ADD_NEW_CAR:
    return [...state, action.payload]
  
    default:
      return state;
  }
}