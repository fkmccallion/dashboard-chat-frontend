import logo from './logo.svg';
import './App.css';

import ChatContainer from './containers/Chats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatContainer />
      </header>
    </div>
  );
}

export default App;
