import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';
import axios from 'axios';
import { fetchWatchListStocks } from '.././redux/watchlist/watchListActions';

class WatchList extends Component {
	componentDidMount() {
		const userIdCookie = document.cookie.replace('uuid=', '');
		this.props.fetchWatchListStocks(userIdCookie);
	}
	render() {
		console.log('these are the props', this.props);
		return (
			<div>
				<NavigationBar />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userWatchList: state.watchListReducer,
		user: state.userReducer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchWatchListStocks: userId => dispatch(fetchWatchListStocks(userId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
