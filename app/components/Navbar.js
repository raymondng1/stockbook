import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
	render() {
		return (
			<Navbar bg='dark' style={{ height: '3rem' }}>
				<Nav style={{color:'white'}}>
					<Nav.Link> Search Stock </Nav.Link>
					<Nav.Link href={'/watchlist'}> Tracking </Nav.Link>
					<Nav.Link href={'/news'}> News </Nav.Link>
					<Nav.Link href={'/login'}> Login </Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

export default NavigationBar;
