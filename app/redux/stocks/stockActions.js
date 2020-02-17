import axios from 'axios';
import {
	SET_STOCK_DATA,
	SET_STOCK_HISTORICAL_PRICE,
	SET_COMPANY_INFORMATION,
	SET_RECENT_NEWS
} from './stockConstants';

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
			.post(`/api/stocks`, stockSymbol)
			.then(res => {
				dispatch(setStockData(res.data));
			})
			.catch(e => {
				console.log(e);
			});
	};
};

export const setStockPrice = stockPriceData => {
	return {
		type: SET_STOCK_HISTORICAL_PRICE,
		stockPriceData
	};
};

export const findStockPrice = stockSymbol => {
	return dispatch => {
		axios
			.post(`/api/stocks/prices`, stockSymbol)
			.then(res => {
				dispatch(setStockPrice(res.data));
			})
			.catch(e => {
				console.log(e);
			});
	};
};

export const setCompanyInformation = companyData => {
	return {
		type: SET_COMPANY_INFORMATION,
		companyData
	};
};

export const findCompanyData = stockSymbol => {
	return dispatch => {
		axios
			.post(`/api/stocks/companyinfo`, stockSymbol)
			.then(res => {
		
				dispatch(setCompanyInformation(res.data));
			})
			.catch(e => console.log(`Can't find the company information`, e));
	};
};

export const setRecentNews = arrayOfObjects => {
	return {
		type: SET_RECENT_NEWS,
		arrayOfObjects
	};
}

// export const fetchNewsData = stockSymbol => {
// 	console.log('these are the first company ' , stockSymbol)
// 	return dispatch =>
// 		axios
// 			.post(`/api/stocks/news`, {stockSymbol})
// 			.then(res => {
// 				console.log('this is the RESPONSE ', res.data)
// 				dispatch(setRecentNews(res.data));
// 			})
// 			.catch(e => {
// 				console.log(e);
// 			});
// };

// export const fetchRecentNewsData = () => {
// 	return dispatch =>
// 		axios
// 			.get(`/api/stocks/recentnews`)
// 			.then(res => {
// 				dispatch(setRecentNews(res.data));
// 			})
// 			.catch(e => {
// 				console.log(e);
// 			});
// };

