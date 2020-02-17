import React, { Component } from 'react';
import { connect } from 'react-redux';

class WatchList extends Component {
  componentDidMount(){
    this.props.userWatchList 
  }
  render(){
    console.log('these are the props', this.props.userWatchList )
    return ( 
      <div> 
        <div> what is good  </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		userWatchList: state.watchListReducer
	};
};

export default connect(mapStateToProps)(WatchList);