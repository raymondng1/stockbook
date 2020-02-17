import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class StockData extends Component {
	addToTracker = event => {

	}
	render() {
		const { stockInformation } = this.props;
		if (!this.props.stockInformation) {
			return <div> Search the stock </div>;
		}
		return (
			<main>
				<br></br>
				<div style={{ fontWeight: 'bold' }}>
					{' '}
					Company Name: {this.props.stockInformation.companyName}
				</div>
				<div> Stock Ticker(Symbol): {stockInformation.symbol}</div>
				<div>
					Primay Exchange: {this.props.stockInformation.primaryExchange}
				</div>
				<div style={{ color: 'green' }}>
					{' '}
					52 Week High: ${stockInformation.week52High}{' '}
				</div>
				<div style={{ color: 'red' }}>
					{' '}
					52 Week Low: ${stockInformation.week52Low}{' '}
				</div>
				<div>
					<div style={{ fontWeight: 'bold' }}>
						{stockInformation.latestTime}{' '}
						<span> Market: {stockInformation.latestSource}</span>
					</div>
					<div> Price: ${stockInformation.latestPrice}</div>
				</div>
				<br/>
				<Button variant='dark'>Add to Tracker</Button>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		stockInformation: state.stockInformationReducer,
		user: state.userReducer
	};
};

export default connect(mapStateToProps)(StockData);
