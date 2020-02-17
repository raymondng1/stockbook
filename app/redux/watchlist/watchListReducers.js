import { POST_TO_WATCHLIST } from 'watchListConstants';

export const watchListReducer = (state = {}, action) => {
	switch (action.type) {
		case POST_TO_WATCHLIST :
			return action
		default:
			return state;
	}
};
