import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';
import { logInUser } from '../redux/users/userActions';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state);
  };
  render() {
    const { logInStatus } = this.props.userLoginStatus;
    return (
      <Fragment>
        {!logInStatus ? (
          <Form
            className='mt-4'
            style={
              {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }
            }
          >
            <Form.Group
              style={
                {
                  width: '50%'
                }
              }
            >
              <Form.Label>Email Address</Form.Label>
              <Col>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Enter email'
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              style={
                {
                  width: '50%'
                }
              }
            >
              <Form.Label> Password</Form.Label>
              <Col>
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <p>
              Not a user?<Nav.Link href='/signup'> Sign up </Nav.Link>
            </p>
            <Button
              style={
                {
                  margin: '1rem',
                  backgroundColor: 'black',
                  border: 'none',
                  borderRadius: '0',
                  width: '300px'
                }
              }
              onClick={this.onSubmit}
            >
              Log In!
            </Button>
          </Form>
        ) : (
          <h2>
						Welcome to Stockbook! 
          </h2>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.authenticationReducer,
    userLoginStatus: state.authenticationReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: credentials => dispatch(logInUser(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
