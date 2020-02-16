import React, { Component } from 'react';
import NavigationBar from './Navbar';
import InputStockQuote from './InputStockQuote';
import StockData from './StockData';
import StockChart from './StockChart';
import CompanyData from './CompanyData';

class Homepage extends Component {
	render() {
		return (
			<main>
				<NavigationBar />
				<InputStockQuote />
				<StockChart />
				<StockData />
        <CompanyData/>
			</main>
		);
	}
}

export default Homepage;
