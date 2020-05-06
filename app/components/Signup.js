import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';
import { logInUser } from '../redux/users/userActions';
import { connect } from 'react-redux';

class Signup extends Component{
  render(){
    return (
      <Form>
        <div> email </div>
        <div> password </div>
        <div> confirm password</div>
        <button > Signup </button>
      </Form>
    )
  }
}

export default Signup;