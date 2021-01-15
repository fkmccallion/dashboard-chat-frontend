const BASE_URL = "http://localhost:3000"
const CHATS_URL = `${BASE_URL}/chats`

export function fetchChats() {

  return (dispatch) => {
    fetch(CHATS_URL)
      .then(response => response.json())
      .then(chats => dispatch({ type: 'POPULATE_CHATS', chats }));
  };

}

export const newChat = chat => {

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'content': chat.content,
      'user_id': chat.user_id
    })
  };

  return (dispatch) => {
    fetch(CHATS_URL, configObj)
      .then(response => response.json())
      .then(chats => dispatch({ type: 'NEW_CHAT', chats }));
  };

};
