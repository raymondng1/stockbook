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

class StockChart extends Component {
	render() {
		console.log(
			'these are the prices which is an array of objects',
			this.props.stockHistoricalPrices
		);
		const { stockHistoricalPrices } = this.props;
    let data = stockHistoricalPrices; 

		if (!stockHistoricalPrices) {
			return <div> insert chart </div>;
		}
		return (
			<main>
				<div> This is the chart </div>
				<LineChart
					width={600}
					height={300}
					data={stockHistoricalPrices}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
					<Line type='monotone' dataKey='uClose' stroke='#8884d8' />
					<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
				</LineChart>
				{/* <div>
					{stockHistoricalPrices.map(price => (
						<div key={price.uOpen}>
							{price.date} {price.uClose}
						</div>
					))}
				</div> */}
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
