import React, { useState } from 'react';
import '../css/LogInScreenStyles.css';
import axios from 'axios';

const LogInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    try {
      const response = await axios.post('http://172.22.176.229:3000/login', {
        username,
        password,
      });
      alert('Login successful!');
      window.location.href = '/'; // Redirige vers la page d'accueil
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Log In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={handleLogIn} className="button">
        Log In
      </button>
    </div>
  );
};

export default LogInScreen;
