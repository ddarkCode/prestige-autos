import axios from "axios";
import { SIGN_UP, SIGN_IN, SIGN_OUT, SIGN_IN_WITH_GOOGLE } from "../constants/constants";
import cors from 'cors'


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

const googleAxiosInstance = axios.create({
  baseURL: 'http://localhost:4444/auth/google',
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer YourAccessToken', 
    'Access-Control-Allow-Orgin': "*",
    'Access-Control-Allow-Methods':'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE'
  
  },
 
  options: {
    method: 'OPTIONS',
    headers: {
      'Access-Control-Request-Headers': 'Authorization, Content-Type',
      'Access-Control-Allow-Orgin': "*",
    },
  },
});


export function signinWithGoogle() {
  return async function(dispatch) {
    googleAxiosInstance.get('/').then(value => {
      console.log(value)
      dispatch({
        type: SIGN_IN_WITH_GOOGLE,
        payload: value
      })
    }).catch(err => {
      console.log(err)
    })
   
  }
}


export function signout() {
  return async function(dispatch) {
    const {data} = await axios.get('http://localhost:4444/api/users/logout');

    dispatch({
      type: SIGN_OUT,
      payload: data
    })
  }
}