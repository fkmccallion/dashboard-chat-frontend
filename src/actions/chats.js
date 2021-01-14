const BASE_URL = "http://localhost:3000"
const CHATS_URL = `${BASE_URL}/chats`

export function fetchChats() {

  return (dispatch) => {
    fetch(CHATS_URL)
      .then(response => response.json())
      .then(chats => dispatch({ type: 'POPULATE_CHATS', chats }));
  };

}
