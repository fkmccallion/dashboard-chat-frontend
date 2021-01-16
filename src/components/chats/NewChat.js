import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newChat } from '../../actions/chats';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class NewChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user_id: 1
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.newChat(this.state)
    this.setState({
      content: "",
      user_id: 1
    });
  };

  render() {

    return(
      <div>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Row>
            <Col>
              <Form.Control
                as="textarea"
                placeholder="New Chat!"
                name="content"
                onChange={event => this.handleChange(event)}
                value={this.state.content}
                cols="50"
                rows="4"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              Character Count: {this.state.content.length}
            </Col>
            <Col className="text-right">
              <Button variant="primary" type="submit">
                Chat
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    )

  }

}

const mapDispatchToProps = dispatch => {
  return {
    newChat: chat => dispatch(newChat(chat))
  };
};

export default connect(null, mapDispatchToProps)(NewChat);
