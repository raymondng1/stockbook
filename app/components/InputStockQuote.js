import React, { Component } from 'react';
import { Form, Button, Navbar } from 'react-bootstrap';
import {
	findStockData,
	findStockPrice,
	findCompanyData
} from '../redux/stocks/stockActions';
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
		this.props.fetchStockData(this.state)
		this.props.fetchCompanyData(this.state)
		this.props.fetchStockPrice(this.state)
	};
	render() {
		return (
				<Form inline>
					<Form.Group>
						{/* <Form.Label> Stock Quote </Form.Label> */}
						<Form.Control
							name='stockSymbol'
							placeholder='Enter Stock Symbol'
							className=' mr-sm-2'
							onChange={this.handleChange}
						/>
						<Button onClick={this.onSubmit} style={{ backgroundColor: 'gray' }}>
							{' '}
							Search{' '}
						</Button>
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
