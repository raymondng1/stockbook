import React, { Component } from 'react'; 
import {connect} from 'react-redux';

class StockData extends Component {
  render(){
    console.log('this is the props of the stock data', this.props.stockData)
    return <div> </div>
  }
}

mapStateToProps = state => {
  stockData: state.stockData
}

export default connect(mapStateToProps)(InputStockQuote)
