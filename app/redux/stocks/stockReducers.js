import {
	SET_STOCK_DATA,
	SET_STOCK_HISTORICAL_PRICE,
	SET_COMPANY_INFORMATION,
	SET_RECENT_NEWS
} from './stockConstants';

export const stockInformationReducer = (state = null, action) => {
	switch (action.type) {
		case SET_STOCK_DATA:
			return action.stockData;
		default:
			return state;
	}
};

export const stockHistoricalPriceReducer = (state = null, action) => {
	switch (action.type) {
		case SET_STOCK_HISTORICAL_PRICE:
			return action.stockPriceData;
		default:
			return state;
	}
};

export const companyReducer = (state = null, action) => {
	switch (action.type) {
		case SET_COMPANY_INFORMATION:
			return action.companyData;
		default:
			return state;
	}
};

export const stockNewsReducer = (state = null, action) => {
	switch (action.type) {
		case SET_RECENT_NEWS:
			return action.arrayOfObjects;
		default:
			return state;
	}
};
