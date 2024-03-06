import React, { useState } from 'react';
import './loginpage.css';

const Loginpage = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    const handleLogin=(e) => {
        e.preventDefault();

        if(!isValidUsername(username)){
            setErrorMessage('Please enter a valid username.');
            return;
        }

        if(!isValidEmail(email)){
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if(!isValidPassword(password)){
            setErrorMessage('Please enter a valid password.');
            return;
        }

        setErrorMessage('');
        console.log('Logging in...');
    }

    const isValidUsername = (username) => {
        return username.trim() !== '';
    };

    const isValidEmail = (email) => {
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 5 && /id/.test(password);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <div>
                    <h2>Login Form</h2>
                    <label>Username : </label>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email : </label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password : </label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className='login-button'>LOGIN</button>
            </form>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
    );
};

export default Loginpage;
