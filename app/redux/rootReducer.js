import { combineReducers } from 'redux';
import {stockInformationReducer, stockHistoricalPriceReducer } from './stocks/stockReducers'; 

const rootReducer = combineReducers({
  stockInformationReducer,
  stockHistoricalPriceReducer
})

export default rootReducer;