import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import InputStockQuote from './InputStockQuote';
import Homepage from './Home';
import Login from './Login';

class Root extends Component {
	render() {
		return (
			<Router>
				<Route path='/' component={Homepage} />
				<Route path='/login' component={Login} />
			</Router>
		);
	}
}

export default Root;
