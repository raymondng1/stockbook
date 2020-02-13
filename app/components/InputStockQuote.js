import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { findStockData } from '../redux/stocks/stockActions';
import {connect} from 'react-redux';

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
	};
	render() {
    console.log('this is the dispatch', this.props)

		return (
			<Form>
				<Form.Group>
					<Form.Label> Stock Quote </Form.Label>
					<Form.Control
						name='inputstocksymbol'
						placeholder='Enter Stock Symbol'
						onChange={this.handleChange}
					/>
					<Button> Search </Button>
				</Form.Group>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchStockData: stockSymbol => dispatch(findStockData(stockSymbol))
  };
};

export default connect(null, mapDispatchToProps)(InputStockQuote)
