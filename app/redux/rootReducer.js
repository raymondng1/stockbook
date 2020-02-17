import { combineReducers } from 'redux';
import {
	stockInformationReducer,
	stockHistoricalPriceReducer,
	companyReducer,
	stockNewsReducer
} from './stocks/stockReducers';
import { authenticationReducer, userReducer } from './users/userReducers';
import { watchListReducer } from './watchlist/watchListReducers';

//reducers will change the data to the next state, pass it the store
const rootReducer = combineReducers({
	stockInformationReducer,
	stockHistoricalPriceReducer,
	companyReducer,
	authenticationReducer,
	userReducer,
	watchListReducer,
	stockNewsReducer
});

export default rootReducer;
