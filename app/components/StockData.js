import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockData extends Component {
	render() {
		console.log('this is the PROPS =>', this.props);
    const { stockInformation, companyInformation } = this.props;
    
		if (!this.props.stockInformation && !this.props.companyInformation) {
			return <div> Search the stock </div>;
		}
		return (
			<main>
				<div> Stock Information </div>
				<div> Stock Ticker: {stockInformation.symbol}</div>
				<div> Compnany Name: {this.props.stockInformation.companyName}</div>
				<div>
					Primay Exchange: {this.props.stockInformation.primaryExchange}
				</div>
				<div> 52 Week High: ${stockInformation.week52High} </div>
				<div> 52 Week Low: ${stockInformation.week52Low} </div>
				<div> website: {companyInformation.website} </div>
				<div> description: {companyInformation.description}</div>
				<button> Add to Watch List </button>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		stockInformation: state.stockInformationReducer,
		companyInformation: state.companyReducer
	};
};

export default connect(mapStateToProps)(StockData);
