import axios from 'axios';
import { SET_STOCK_DATA } from './stockConstants';

require('dotenv').config();

//Action creators for getting/fetching data with thunk middleware in the '../../store.js'
export const setStockData = stockData => {
	return {
		type: SET_STOCK_DATA,
		stockData
	};
};

export const findStockData = stockSymbol => {
	return dispatch => {
		axios
			.get(
				`https://cloud.iexapis.com/stable/${stockSymbol}/aapl/quote?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
			)
			.then(res => {
				dispatch(setStockData(res.data));
      })
      .catch(e => {
        console.error(e)
      })
	};
};
