import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchChats } from '../actions/chats';
import Index from '../components/chats/Index';
import NewChat from '../components/chats/NewChat';
import Button from 'react-bootstrap/Button';

class Chats extends Component {

  componentDidMount() {
    this.props.fetchChats()
  }

  constructor(props) {
    super(props);
    this.state = {
      display: 'd-none',
      label: 'Show'
    }
  }

  toggleChatDisplay = event => {
    this.setState(prevState => ({
      display: prevState.display ? null : 'd-none',
      label: prevState.label === 'Show' ? 'Hide' : 'Show'
    }));
  };

  render() {

    return (
      <div>
        <NewChat />
        <Button
          variant="primary"
          type="submit"
          onClick={event => this.toggleChatDisplay(event)}
        >
          {this.state.label} Chats
        </Button>
        <span className={this.state.display}>{this.props.chats ? this.props.chats.chats.map(chat => <Index key={chat.id} chat={chat} /> ) : null}</span>
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    chats: state.chats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChats: () => dispatch(fetchChats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
