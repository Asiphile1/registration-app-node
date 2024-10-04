import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo">ELITE AIR</div>
        <input 
          type="text" 
          placeholder="Enter Your Name Please" 
          className="input-field" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Enter Your Password please" 
          className="input-field" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className="login-right">
        <video className="login-video" autoPlay muted loop>
          <source src="/assets/login video.mp4" type="video/mp4" /> 
        </video>
      </div>
    </div>
  );
};

export default LoginPage;






































