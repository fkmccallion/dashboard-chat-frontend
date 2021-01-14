export default (state = { chats: [] }, action) => {

  switch (action.type) {
    case 'POPULATE_CHATS':
      console.log(action)
      return {
        ...state,
        chats: action.chats
      }
    default:
      return state;
  }

}
