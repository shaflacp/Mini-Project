import React, { useState } from 'react';
import './loginpage.css';

const Loginpage = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [dateOfBirth,setDateOfBirth]=useState('');
    const [selectedOption,setSelectedOption]=useState('');
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
            setErrorMessage('Please enter a valid password .');
            return;
        }

            
        if(!isValidDate(dateOfBirth)){
            setErrorMessage('Please enter a valid date of birth.');
            return;
        }

            
        if(!selectedOption) {
            setErrorMessage('Please select an option.');
            return;
        }

        setErrorMessage('');
        console.log('Logging in...');
    }

    const isValidUsername = (username) => {
        return username.trim () !== '';

    };

    const isValidEmail = (email) => {
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 5&& /id/.test(password);
    };

    const isValidDate =(date) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(date);
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
                    onChange={(e) => setUsername(e.target.value)   }/>
 
                </div>
                <div>
                <label>Email : </label>
                <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                </div>
                <div>
                <label>Password : </label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
                 <div>
                <label>Date of Birth : </label>
                <input 
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}/>
                </div>
                <div>
                <label>Select an option : </label>
                <select
                 value={selectedOption}
                 onChange={(e) => setSelectedOption(e.target.value)}>
                 <option value="">Select</option>
                 <option value="option1">option1</option>
                 <option value="option2">option2</option>
                 <option value="option3">option3</option>
                 </select>
                 </div>
                 <button type="submit" className='login-button'>LOGIN</button>
                  </form>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
                 </div>
      );
};
        

export default Loginpage;