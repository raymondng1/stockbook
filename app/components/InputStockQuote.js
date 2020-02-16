import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { findStockData, findStockPrice, findCompanyData } from '../redux/stocks/stockActions';
import { connect } from 'react-redux';

class InputStockQuote extends Component {
	state = {
		stockSymbol: ''
	};
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	onSubmit = event => {
		this.props.fetchStockPrice(this.state);
		this.props.fetchCompanyData(this.state);
		this.props.fetchStockData(this.state);
		event.preventDefault();
	};
	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Label> Stock Quote </Form.Label>
					<Form.Control
						name='stockSymbol'
						placeholder='Enter Stock Symbol'
						onChange={this.handleChange}
					/>
					<Button onClick={this.onSubmit}> Search </Button>
				</Form.Group>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchStockData: stockSymbol => dispatch(findStockData(stockSymbol)),
		fetchStockPrice: stockSymbol => dispatch(findStockPrice(stockSymbol)),
		fetchCompanyData: stockSymbol => dispatch(findCompanyData(stockSymbol))
	};
};

export default connect(null, mapDispatchToProps)(InputStockQuote);
