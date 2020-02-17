import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';
import InputStockQuote from './InputStockQuote';
import StockData from './StockData';
import StockChart from './StockChart';
import CompanyData from './CompanyData';

class Homepage extends Component {
	render() {
		console.log('this is the props', this.props);
		return (
			<main>
				<NavigationBar />
				<br />
				<InputStockQuote />
				<br />
				<div style={{ display: 'flex' }}>
					<StockChart />
					<StockData />
				</div>
				<CompanyData />
			</main>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: state.userReducer
	};
};

export default connect(mapStateToProps)(Homepage)
