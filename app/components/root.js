import React, {Component} from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import InputStockQuote from './InputStockQuote';
import Login from './Login';

class Root extends Component {
  render(){
    return (
      <Router> 
        <div> Stock </div>
        <Route path="/home" component={InputStockQuote}/>
        <Route path="/login" component={Login}/> 
        <div> wtf </div> 
      </Router>
    )
  }
}

export default Root; 