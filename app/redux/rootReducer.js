import { combineReducers } from 'redux';
import {stockInformationReducer, stockHistoricalPriceReducer, companyReducer } from './stocks/stockReducers'; 

const rootReducer = combineReducers({
  stockInformationReducer,
  stockHistoricalPriceReducer,
  companyReducer
})

export default rootReducer;