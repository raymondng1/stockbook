import { combineReducers } from 'redux';
import {stockInformationReducer, stockHistoricalPriceReducer, companyReducer } from './stocks/stockReducers'; 

//reducers will change the data to the next state, pass it the store
const rootReducer = combineReducers({
  stockInformationReducer,
  stockHistoricalPriceReducer,
  companyReducer
})

export default rootReducer;