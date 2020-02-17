import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	AreaChart,
	Area,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts';

const formatter = value => `$${value}`;

class StockChart extends Component {
	render() {
		//pass formater to the y-axis to add '$' next to the value
		const formatter = value => `$${value}`;
		const { stockHistoricalPrices, stockInformation } = this.props;
		if (!stockHistoricalPrices) {
			return <div> insert chart </div>;
		}
		return (
			<main>
				<div style={{"fontWeight":'bold'}}> {this.props.stockInformation.companyName} Historical Cost </div>
				<AreaChart
					width={700}
					height={300}
					//prices from API from the redux store
					data={stockHistoricalPrices}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
					<Area type='monotone' dataKey='high' stroke='green' dot={false} />
					<Area type='monotone' dataKey='low' stroke='red' dot={false} />
					<Area type='monotone' dataKey='open' dot={false} />
					<Area type='monotone' dataKey='close' dot={false} />
					<CartesianGrid strokeDasharray='6 5' />
					<XAxis dataKey='date' tick={{ fontSize: 10 }} />
					<YAxis tickFormatter={formatter} />
					<Tooltip />
				</AreaChart>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		stockHistoricalPrices: state.stockHistoricalPriceReducer,
		stockInformation: state.stockInformationReducer
	};
};

export default connect(mapStateToProps)(StockChart);
