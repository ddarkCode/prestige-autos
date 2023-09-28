import { SIGN_UP, SIGN_IN, SIGN_OUT, SIGN_IN_WITH_GOOGLE } from "../constants/constants";
import initialState from "../initialState";


export function authReducer(state=initialState.user, action){
  switch (action.type) {
    case SIGN_UP:
      return action.payload
  
    case SIGN_IN:
      return action.payload
    case SIGN_IN_WITH_GOOGLE:
      return action.payload;

    case SIGN_OUT:
      return action.payload
    default:
      return state
  }
}