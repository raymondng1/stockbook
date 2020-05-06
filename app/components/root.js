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
import NewsComponent from './NewsComponent';
import Signup from './Signup';

class Root extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/home' component={Homepage} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
					<Route path='/recentnews' component={NewsComponent} />
					<Route path='/watchlist' component={WatchList} />
					<Redirect to='/login' />
				</Switch>
			</Router>
		);
	}
}

export default Root;
