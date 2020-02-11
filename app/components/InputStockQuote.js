import React, {Component} from 'react';

class InputStockQuote extends Component {
  state = {
    stockQuote: ''
  }
  render (){
    return(
      <form> 
        <label> Stock Quote </label>
        <input> </input>
        <button> Search </button>
      </form>
    )
  }
}