import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { findStockData, findStockPrice } from '../redux/stocks/stockActions';
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
		event.preventDefault();
		this.props.fetchStockData(this.state);
		this.props.fetchStockPrice(this.state);
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

const mapStateToProps = state => {
	return {
		stockInformation: state.stockData
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchStockData: stockSymbol => dispatch(findStockData(stockSymbol)),
		fetchStockPrice: stockSymbol => dispatch(findStockPrice(stockSymbol))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InputStockQuote);
