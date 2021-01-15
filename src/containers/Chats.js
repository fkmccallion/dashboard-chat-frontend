import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchChats } from '../actions/chats';
import Index from '../components/chats/Index';
import NewChat from '../components/chats/NewChat';

class Chats extends Component {

  componentDidMount() {
    this.props.fetchChats()
  }

  render() {

    return (
      <div>
        <NewChat />
        {this.props.chats ? this.props.chats.chats.map(chat => <Index key={chat.id} chat={chat} /> ) : null}
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
