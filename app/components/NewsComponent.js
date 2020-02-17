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
				<div> Recent News Following: </div>
				{recentNews.map(article => (
					<main>
						{' '}
						<div style={{ fontWeight: 'bold' }}>
							{' '}
							HeadLine: {article.headline}
						</div>{' '}
						<img src={article.imageUrl} />
						<div> Summary: {article.summary}</div>
						<div> Source: {article.source} </div>
						<Nav.Link href={article.qmUrl}> {article.qmUrl} </Nav.Link>
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
