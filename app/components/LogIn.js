import React, { Component } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';
import { logInUser } from './../redux/users/userActions';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};
	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Label>Email Address</Form.Label>
					<Col sm='5'>
						<Form.Control
							name='email'
							type='email'
							placeholder='Enter email'
							onChange={this.handleChange}
						/>
					</Col>
				</Form.Group>
				<Form.Group>
					<Form.Label> Password</Form.Label>
					<Col sm='5'>
						<Form.Control
							name='password'
							type='password'
							placeholder='Password'
							onChange={this.handleChange}
						/>
					</Col>
				</Form.Group>
				<Nav.Link href='/signup'> Sign up </Nav.Link>
				<Button onClick={this.onSubmit}> Log In! </Button>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logIn: credentials => dispatch(logInUser(credentials))
	};
};

export default connect(null, mapDispatchToProps)(Login);
