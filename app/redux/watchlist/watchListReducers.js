import { SET_TO_WATCHLIST } from './watchListConstants';

export const watchListReducer = (state = [], action) => {
	switch (action.type) {
		case  SET_TO_WATCHLIST :
			return action.stockWatchList
		default:
			return state;
	}
};
