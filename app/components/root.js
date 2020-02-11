import React, {Component} from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import InputStockQuote from './InputStockQuote';

class Root extends Component {
  render(){
    return (
      <Router> 
        <div> Stock </div>
        <Route path="/home" componenent={InputStockQuote}/>
        <div> wtf </div>
      </Router>
    )
  }
}

export default Root; 