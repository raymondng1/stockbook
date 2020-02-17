import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { fetchWatchListStocks } from '.././redux/watchlist/watchListActions';

class WatchList extends Component {
	componentDidMount() {
		const userIdCookie = document.cookie.replace('uuid=', '');
		this.props.fetchWatchListStocks(userIdCookie);
	}
	render() {
		console.log('these are the props', this.props);
		const { userWatchList } = this.props;

		return (
			<div>
				<NavigationBar />
				<br />
				<h2> Watchlist </h2>
				{userWatchList.map(foundStock => (
					
					<div key={foundStock.id} style={{ border: 'solid 1 px' , margin: '1rem'}}>
						{' '}
						<span style={{ fontWeight: 'bold' }}> Company Name: </span>{' '}
						{foundStock.companyName}{' '}
						<span>
							{' '}
							<span style={{ fontWeight: 'bold' }}>
								{' '}
								Stock Ticker Symbol:{' '}
							</span>{' '}
							{foundStock.stockTicker}
						</span>
						<span>
							{' '}
							<Button  variant="info" size="sm"> Remove from watching </Button>
						</span>
					</div>
				))}
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
