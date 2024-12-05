import React, { useState } from 'react';
import '../css/SignUpScreenStyles.css';
import axios from 'axios';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://172.22.176.229:3000/signup', {
        username,
        password,
        email,
      });
      alert('Account created successfully!');
      window.location.href = '/login'; // Redirige vers la page de connexion
    } catch (error) {
      alert(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Sign Up</h1>
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
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <button onClick={handleSignUp} className="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpScreen;
