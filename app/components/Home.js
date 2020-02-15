import React, { Component } from 'react';
import InputStockQuote from './InputStockQuote'
import StockData from './StockData';

class Homepage extends Component {
  render(){
    return (
      <main> 
        <InputStockQuote/> 
        <StockData/>
      </main>
    )
  }
}

export default Homepage;