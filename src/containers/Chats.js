import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchChats } from '../actions/chats';
import Chat from '../components/chats/Display';

class Chats extends Component {

  componentDidMount() {
    this.props.fetchChats()
  }

  render() {

    return (
      <div>
        {this.props.chats ? this.props.chats.chats.map(chat => <Chat key={chat.id} chat={chat} /> ) : null}
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
