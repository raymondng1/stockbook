import { combineReducers } from 'redux';
import stockReducer from './stocks/stockReducers'; 

const rootReducer = combineReducers({
  stockReducer
})

export default rootReducer;