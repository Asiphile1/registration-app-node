import React, { useState } from 'react';
import { auth } from '../firebase'; 
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');

    try {
      
      const userCredential = await auth.signInWithEmailAndPassword(username, password);
      const token = await userCredential.user.getIdToken(); // Get Firebase ID token
      onLogin(token); // Call the onLogin function passed as a prop with the token
    } catch (error) {
     
      setError(error.message); 
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo">ELITE AIR</div>
        <form onSubmit={handleLogin}> 
          <input 
            type="text" 
            placeholder="Enter Your Email"  
            className="input-field" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Enter Your Password" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>} 
          <button type="submit" className="login-button">Login</button> 
        </form>
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















// import React, { useState } from 'react';
// import './LoginPage.css';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     onLogin(username, password);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-left">
//         <div className="logo">ELITE AIR</div>
//         <input 
//           type="text" 
//           placeholder="Enter Your Name Please" 
//           className="input-field" 
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input 
//           type="password" 
//           placeholder="Enter Your Password please" 
//           className="input-field" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="login-button" onClick={handleLogin}>Login</button>
//       </div>
//       <div className="login-right">
//         <video className="login-video" autoPlay muted loop>
//           <source src="/assets/login video.mp4" type="video/mp4" /> 
//         </video>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






































