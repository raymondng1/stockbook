import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts';

const formatter = (value) => `$${value}`;

class StockChart extends Component {
	render() {
		//pass formater to the y-axis to add '$' next to the value
		const formatter = (value) => `$${value}`;
		const { stockHistoricalPrices } = this.props;
		if (!stockHistoricalPrices) {
			return <div> insert chart </div>;
		}
		return (
			<main>
				<div> This is the chart </div>
				<LineChart
					width={600}
					height={300}
					//prices from API from the redux store
					data={stockHistoricalPrices}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
					<Line type='monotone' dataKey='high' stroke='green' dot={false} />
					<Line type='monotone' dataKey='low' stroke='red' dot={false} />
					<Line type='monotone' dataKey='open' stroke='blue' dot={false} />
					<Line type='monotone' dataKey='close' stroke='blue' dot={false} />
					<CartesianGrid strokeDasharray='6 5' />
					<XAxis dataKey='date' tick={{ fontSize: 10 }} />
					<YAxis tickFormatter={formatter}/>
					<Tooltip />
				</LineChart>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		stockHistoricalPrices: state.stockHistoricalPriceReducer
	};
};

export default connect(mapStateToProps)(StockChart);
