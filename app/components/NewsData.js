import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';
import axios from 'axios';
import { fetchWatchListStocks } from '.././redux/watchlist/watchListActions';
import { fetchNewsData , fetchRecentNewsData } from '.././redux/stocks/stockActions';

class StockNewsData extends Component {
	componentDidMount() {


		// const userIdCookie = document.cookie.replace('uuid=', '');
		// this.props
		// 	.fetchWatchListStocks(userIdCookie)
		// 	.then(res => {

		// 		// let arrOfStockSymbols = res.stockWatchList.map(stockSymbol => stockSymbol.stockTicker) 
		// 		// this.props.fetchNewsData(arrOfStockSymbols)
		// 		this.props.fetchNewsData(res.stockWatchList[0].stockTicker)
		// 	})
		// 	.catch(e => console.log(e))
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
		user: state.userReducer,
		recentNews: state.stockNewsReducer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchWatchListStocks: userId => dispatch(fetchWatchListStocks(userId)),
		fetchNewsData: stockSymbols => dispatch(fetchNewsData(stockSymbols)),
		fetchNewsData: () => dispatch(fetchRecentNewsData())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StockNewsData);
