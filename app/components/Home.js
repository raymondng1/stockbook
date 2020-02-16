import React, { Component } from 'react';
import NavigationBar from './Navbar';
import InputStockQuote from './InputStockQuote'
import StockData from './StockData';
import StockChart from './StockChart'; 

class Homepage extends Component {
  render(){
    return (
      <main> 
        <NavigationBar/>
        <InputStockQuote/>
        <StockChart/>
        <StockData/>
      </main>
    )
  }
}

export default Homepage;