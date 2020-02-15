import axios from 'axios';
import { SET_STOCK_DATA, SET_STOCK_HISTORICAL_PRICE } from './stockConstants';

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

export const setStockPrice = stockPriceData => {
	return {
		type: SET_STOCK_HISTORICAL_PRICE,
		stockPriceData
	}
}

export const findStockPrice= stockSymbol => {
	return dispatch => {
		axios
			.post(
				`/api/stocks/prices`, stockSymbol
			)
			.then(res => {
				dispatch(setStockPrice(res.data));
      })
      .catch(e => {
        console.log(e)
      })
	};
};

