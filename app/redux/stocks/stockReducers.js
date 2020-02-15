import { SET_STOCK_DATA , SET_STOCK_HISTORICAL_PRICE } from './stockConstants';

export const stockInformationReducer = (state = null, action) => {
	switch (action.type) {
		case SET_STOCK_DATA:
			return action.stockData
		default:
			return state;
	}
};

export const stockHistoricalPriceReducer = (state = null, action ) =>{
	switch(action.type){ 
		case SET_STOCK_HISTORICAL_PRICE:
			return action.stockPriceData
		default:
			return state;
	}
}

