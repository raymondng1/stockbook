import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

class NavigationBar extends Component {
	switchNavBar = params => {
		switch (params.userType) {
			case 'customer':
				return (
					<Nav>
						<Nav.Link href={`/user/${params.id}`}>
						</Nav.Link>
						<Button> Logout </Button>
					</Nav>
				);
			default:
				return (
					<Nav>
						<Nav.Link href='/signup'> Sign Up </Nav.Link>
						<Nav.Link href='/login'> Login </Nav.Link>
					</Nav>
				);
		}
	};
	render() {
		const { user } = this.props;
		return (
			<Navbar bg='dark' style={{ height: '3rem' }}>
				<Nav style={{ color: 'white' }}>
					<Nav.Link> Search Stock </Nav.Link>
					<Nav.Link href={'/watchlist'}> Tracking </Nav.Link>
					<Nav.Link href={'/news'}> News </Nav.Link>
					<Nav.Link href={'/login'}> Login </Nav.Link>
				</Nav>
				<Nav>{this.switchNavBar(user)}</Nav>
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
