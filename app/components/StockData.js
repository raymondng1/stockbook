import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { postToDataBase } from '.././redux/watchlist/watchListActions';

class StockData extends Component {
	// componentDidMount(){
	// 	this.props.history.push('/watchlist')
	// }
	addToTracker = (stockTicker, companyName, userId) => {
		this.props.AddToWatchList({ stockTicker, companyName, userId });
	};
	render() {
		const { stockInformation, user } = this.props;
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
				<br />
				<Button
					variant='dark'
					onClick={e => {
						this.addToTracker(
							stockInformation.symbol,
							stockInformation.companyName,
							user.id
						);
					}}>
					Add to Tracker
				</Button>
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

const mapDispatchToProps = dispatch => {
	return {
		AddToWatchList: data => dispatch(postToDataBase(data))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(StockData);
