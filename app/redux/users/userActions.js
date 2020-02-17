import axios from 'axios';
import {LOGIN_SUCCCESS, LOGIN_ERROR} from './userConstants'; 

export const logInSuccess = () => {
  return {
    type: LOGIN_SUCCCESS
  };
};

//Thunks for logging in 

export const logInUser = ({ email, password }) => {
  return dispatch => {
    return axios
      .post(`/api/user/login`, { email, password })
      .then(user => {
        dispatch(logInSuccess());
      })
      .catch((e) => {
				console.log('Failed logging in')
      });
  };
};

export const loggedInFail = () => {
  return {
    type: LOGIN_ERROR
  };
};