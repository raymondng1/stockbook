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
import NewsData from './NewsData';

class Root extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/home/:id' component={Homepage} />
					<Route path='/login' component={Login} />
					{/* <Route path='/news' component={NewsData} /> */}
					{/* <Route path='/watchlist' component={}/>  */}
				</Switch>
			</Router>
		);
	}
}

export default Root;
