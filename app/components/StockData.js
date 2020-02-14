import React, { Component } from 'react'; 
import {connect} from 'react-redux';

class StockData extends Component {
  render(){
    console.log('this is the', this.props.stockData)
    return 
  }
}

mapStateToProps = state => {
  stockData: state.stockData
}

export default connect(mapStateToProps)(InputStockQuote)
