import { GET_CARS } from "../constants/constants";

export const carsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CARS:
      return action.payload;
  
    default:
      return state;
  }
}