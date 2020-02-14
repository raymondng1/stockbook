import axios from 'axios';
import { SET_STOCK_DATA } from './stockConstants';

//Action creators for getting/fetching data with thunk middleware in the '../../store.js'
export const setStockData = stockData => {
	return {
		type: SET_STOCK_DATA,
		stockData
	};
};

export const findStockData = (stockSymbol) => {
	console.log('this is the stockSymbol', stockSymbol)
	return dispatch => {
		axios
			.post(
				`/api/stocks`, stockSymbol
			)
			.then(res => {
				dispatch(setStockData(res.data));
      })
      .catch(e => {
        console.log(e)
      })
	};
};
