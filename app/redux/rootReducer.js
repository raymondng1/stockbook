import { combineReducers } from 'redux';
import {
	stockInformationReducer,
	stockHistoricalPriceReducer,
	companyReducer
} from './stocks/stockReducers';
import { authenticationReducer, userReducer } from './users/userReducers';
//reducers will change the data to the next state, pass it the store
const rootReducer = combineReducers({
	stockInformationReducer,
	stockHistoricalPriceReducer,
	companyReducer,
	authenticationReducer,
	userReducer
});

export default rootReducer;
