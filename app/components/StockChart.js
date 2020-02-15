import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockChart extends Component {
	render() {
    console.log('these are the prices which is an array of objects', this.props.stockHistoricalPrices)
    const {stockHistoricalPrices } = this.props; 

    if(!stockHistoricalPrices){
      return <div> insert chart </div>
    }
		return <div> this is the chart </div>;
	}
}

const mapStateToProps = state => {
	return {
		stockHistoricalPrices: state.stockHistoricalPriceReducer
	};
};

export default connect(mapStateToProps)(StockChart);
