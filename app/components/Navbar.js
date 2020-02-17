import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class NavigationBar extends Component {
	render() {
		const { user } = this.props;

		if (!user) {
			return <div> </div>;
		}
		return (
			<Navbar bg='dark' style={{ height: '3rem' } }  className="justify-content-end">
				<Nav style={{ color: 'white' }}  className="justify-content-end">
					<Nav.Link href={'/home'}> Search Stock </Nav.Link>
					<Nav.Link href={'/watchlist'}> Tracking </Nav.Link>
					<Nav.Link href={'/news'}> Recent News </Nav.Link>
					<Nav.Link href={'/'}> Logout </Nav.Link> 
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
