import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Navbar';
import axios from 'axios';
import {
	fetchNewsData,
	fetchRecentNewsData
} from '.././redux/stocks/stockActions';
import { Nav } from 'react-bootstrap';

class NewsComponent extends Component {
	componentDidMount() {
		this.props.fetchNewsRecentData()
	}
	render() {
		const { recentNews } = this.props;
		if (!recentNews) {
			return <div> Insert News </div>;
		}
		return (
			<main>
				<NavigationBar />
				<br />
				<h2> Recent News Following: </h2>
				{recentNews.map(article => (
					<main>
						{' '}
						<div style={{ fontWeight: 'bold' }}>
							{' '}
							HeadLine: {article.headline}
						</div>{' '}
						<img src={article.imageUrl} />
						<div> <span style={{fontWeight:'bold'}}> Summary:</span> {article.summary}</div>
						<div> Source: {article.source} </div>
						<Nav.Link href={article.qmUrl}> {article.qmUrl} </Nav.Link>
						<div> <span style={{fontWeight:'bold'}}>Company Following in relation:</span> {article.related}</div>
						<br></br>
					</main>
				))}
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		recentNews: state.stockNewsReducer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchNewsRecentData: () => dispatch(fetchRecentNewsData())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent);
