import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: '',
      present: ''
    }
  }


  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              id='input-person'
              onChange={event => this.setState({ person: event.target.value })}
              />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              id='input-present'
              onChange={event => this.setState({ present: event.target.value })}
              />
          </FormGroup>
        </Form>
        <Button id='btn-remove' onClick={() => this.props.removeGift(this.props.gift.id)} >Remove Gift</Button>
      </div>
    )
  }
}

export default Gift;
