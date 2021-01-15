export default ( state = null, action ) => {

  switch (action.type) {
    case 'POPULATE_CHATS':
      return {
        ...state,
        chats: action.chats
      }
    case 'NEW_CHAT':
      return {
        ...state,
        chats: action.chats
      }
    default:
      return state;
  }

}
