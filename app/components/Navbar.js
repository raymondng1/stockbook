import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class NavigationBar extends Component {
	render() {
		const { user } = this.props;

		if (!user) {
			return <div> insert chart </div>;
		}
		return (
			<Navbar bg='dark' style={{ height: '3rem' } }  className="justify-content-end">
				<Nav style={{ color: 'white' }}  className="justify-content-end">
					<Nav.Link > Search Stock </Nav.Link>
					<Nav.Link href={'/watchlist'}> Tracking </Nav.Link>
					<Nav.Link href={'/news'}> News </Nav.Link>
					<Nav.Link> Logout </Nav.Link> 
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer
	};
};

export default connect(mapStateToProps)(NavigationBar);
