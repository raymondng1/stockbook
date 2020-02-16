import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
	render() {
		return (
			<Navbar bg='dark' style={{ height: '3rem' }}>
				<Nav style={{color:'white'}}>
					<Nav.Link> Search Stock </Nav.Link>
					<Nav.Link> Tracking </Nav.Link>
					<Nav.Link> News </Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}

export default NavigationBar;
