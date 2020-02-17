import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';
import axios from 'axios';
import { fetchWatchListStocks } from '.././redux/watchlist/watchListActions';
import { fetchNewsData } from '.././redux/stocks/stockActions';

class StockNewsData extends Component {
	componentDidMount() {
		const userIdCookie = document.cookie.replace('uuid=', '');
		this.props
			.fetchWatchListStocks(userIdCookie)
			.then(res => {
				let arrOfStockSymbols = res.stockWatchList.map(stockSymbol => stockSymbol.stockTicker) 
				this.props.fetchNewsData(arrOfStockSymbols)
			})
			.catch(e => console.log(e))
	}
	render() {
		console.log('these are the props', this.props);
		const { userWatchList } = this.props;

		return (
			<div>
				<NavigationBar />
				<br />
				<h2> Recents News: </h2>
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
		fetchWatchListStocks: userId => dispatch(fetchWatchListStocks(userId)),
		fetchNewsData: stockSymbols => dispatch(fetchNewsData(stockSymbols))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StockNewsData);
