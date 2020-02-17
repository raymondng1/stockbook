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
import WatchList from './WatchList';

class Root extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/home' component={Homepage} />
					<Route path='/login' component={Login} />
					{/* <Route path='/news/:id' component={NewsData} /> */}
					<Route path='/watchlist' component={WatchList}/> 
					<Redirect to='/login' />
				</Switch>
			</Router>
		);
	}
}

export default Root;
