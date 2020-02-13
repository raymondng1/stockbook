import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import rootReducer from './redux/rootReducer';

const middleware = [
	thunkMiddleware.withExtraArgument({ axios }),
	createLogger({ collapsed: true })
];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
	// this spreading => ...middleware, thunkMiddleware.withExtraArgument({axios}), create({collapsed:true})
);

export default store;