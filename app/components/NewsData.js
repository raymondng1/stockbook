import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';

class NewsData extends Component {
	componentDidMount() {
		this.props.userWatchList;
	}
	render() {
		console.log('these are the props', this.props);
		return (
			<div>
				<NavigationBar />
				<div> what is good </div>
				<div> THIS IS THE NEWS</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userWatchList: state.watchListReducer,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// fetchNewsArticle: userId => dispatch(fetchWatchListStocks(userId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsData);