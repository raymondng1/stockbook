import axios from 'axios';
import { LOGIN_SUCCCESS, LOGIN_ERROR, SET_USER } from './userConstants';

export const logInSuccess = () => {
	return {
		type: LOGIN_SUCCCESS
	};
};

export const setUser = user => {
	return {
		type: SET_USER,
		user
	};
};
//Thunks for logging in
export const logInUser = ({ email, password }) => {
	return dispatch => {
		return axios
			.post(`/api/users/login`, { email, password })
			.then(user => {
        dispatch(logInSuccess());
        dispatch(setUser(user.data));
			})
			.catch(e => {
				console.log('Failed logging in');
			});
	};
};


export const loggedInFail = () => {
	return {
		type: LOGIN_ERROR
	};
};
