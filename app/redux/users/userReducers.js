import { LOGIN_ERROR, LOGIN_SUCCCESS } from './userConstants';

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
