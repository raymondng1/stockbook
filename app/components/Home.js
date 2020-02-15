import React, { Component } from 'react';
import InputStockQuote from './InputStockQuote'
import StockData from './StockData';
import StockChart from './StockChart'; 

class Homepage extends Component {
  render(){
    return (
      <main> 
        <InputStockQuote/> 
        <StockData/>
        <StockChart/>
      </main>
    )
  }
}

export default Homepage;