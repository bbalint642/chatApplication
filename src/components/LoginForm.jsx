import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //username & password --> chatengine -> visszaadja az üzeneteket
        //ha sikerül a folyamat, akkor bejelentkezik
        // error esetén --> próbálkozz újra
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application by B.Balint642</h1>
                <form onSubmit= {handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}