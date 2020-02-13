import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class InputStockQuote extends Component {
  state = {
    stockQuote: ''
  };
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label> Stock Quote </Form.Label>
          <Button> Search </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default InputStockQuote;
