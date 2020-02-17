import axios from 'axios';
import { SET_TO_WATCHLIST } from './watchListConstants';

export const setWatchList = stockWatchList => {
	return {
		type: SET_TO_WATCHLIST,
		stockWatchList
	};
};

export const postToDataBase = data => {
	return dispatch => {
		return axios
			.post(`/api/watchlist`, data)
			.then(stocks => {
				dispatch(setWatchList(stocks.data));
			})
			.catch(e => {
				console.log('Failed to add to the data base', e);
			});
	};
};

export const fetchWatchListStocks = userId => {
	return dispatch => {
		return axios.get(`/api/watchlist/${userId}`)
		.then(foundStocks => {
			return dispatch(setWatchList(foundStocks.data));
		})
	}
}

