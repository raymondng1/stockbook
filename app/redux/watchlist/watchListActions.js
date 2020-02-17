import axios from 'axios';

export const postToDataBase = (data)=> {
	return dispatch => {
		return axios
			.post(`/api/watchlist`, data )
			.then(stocks => {
				dispatch(setWatchList());
			})
			.catch(e => {
				console.log('Failed to add to the data base', e);
			});
	};
};

