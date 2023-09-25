import axios from "axios";
import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../constants/constants";



export function signup(user) {
  return async function(dispatch) {
    const {data} = await axios.post('http://localhost:4444/api/users/signup', user);

    dispatch({
      type: SIGN_UP,
      payload: data
    })
  }
}

export function signin(user) {
  return async function(dispatch) {
    const {data} = await axios.post('http://localhost:4444/api/users/signin', user);

    dispatch({
      type: SIGN_IN,
      payload: data
    })
  }
}

export function signout() {
  return async function(dispatch) {
    const {data} = await axios.post('http://localhost:4444/api/users/signout');

    dispatch({
      type: LOG_OUT,
      payload: null
    })
  }
}