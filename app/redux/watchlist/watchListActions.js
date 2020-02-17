import axios from 'axios';

export const postToDataBase = data => {
	return dispatch => {
		return axios
			.post(`/api/watchlist`, { data })
			.then(stocks => {
				dispatch(setWatchList());
			})
			.catch(e => {
				console.log('Failed to add to the data base', e);
			});
	};
};

//Thunks for logging in
// export const logInUser = ({ email, password }) => {
// 	return dispatch => {
// 		return axios
// 			.post(`/api/users/login`, { email, password })
// 			.then(user => {
//         dispatch(logInSuccess());
//         dispatch(setUser(user.data));
// 			})
// 			.catch(e => {
// 				console.log('Failed logging in');
// 			});
// 	};
// };
