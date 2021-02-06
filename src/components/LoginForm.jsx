import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "bfa47fe3-37e5-4fc6-bff0-be2a1da85341", 'User-Name': username, 'User-Secret': password};
        

        try {
            //username & password --> chatengine -> visszaadja az üzeneteket
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // sikerul, bejelentkezes

            localStorage.setItem('username', username);
            localStorage.setItem('upassword', password);

            window.location.reload();
            setError('');

        } catch (err) {
        // error esetén --> próbálkozz újra
            setError('Incorrect login information.');
        }
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat lesz ez vagy miez?</h1>
                <form onSubmit= {handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                        <h1>{error}</h1>
                    </div>        
                   
                </form>
            </div>
        </div>
    )
}

export default LoginForm;