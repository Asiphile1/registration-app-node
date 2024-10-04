
// import React, { useState } from 'react';
// import { auth } from '../firebase';

// const AuthPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(email, password);
//       const token = await userCredential.user.getIdToken(); // Get Firebase ID token
//       setUser({ ...userCredential.user, token });
//       console.log('Logged in successfully, Token:', token);
//     } catch (error) {
//       console.error('Error signing in:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {user && <p>Welcome, {user.email}</p>}
//     </div>
//   );
// };

// export default AuthPage;
