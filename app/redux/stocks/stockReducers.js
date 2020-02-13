import { SET_STOCK_DATA } from './stockConstants';

const stockReducer = (state = [], action) => {
	switch (action.type) {
		case SET_STOCK_DATA:
			return action.stockData;
		default:
			return state;
	}
};

export default stockReducer;