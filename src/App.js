import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';


import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="bfa47fe3-37e5-4fc6-bff0-be2a1da85341"
            userName="bbalint642"
            userSecret="admin1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;