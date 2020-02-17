import { LOGIN_ERROR, LOGIN_SUCCCESS, SET_USER } from './userConstants';

export const authenticationReducer = (
	state = { authError: null, logInStatus: null },
	action
) => {
	switch (action.type) {
		case LOGIN_ERROR:
			return {
				...state,
				authError: 'Login Failed',
				logInStatus: false
			};
		case LOGIN_SUCCCESS:
			return {
				...state,
				authError: null,
				logInStatus: true
			};
		default:
			return state;
	}
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};
