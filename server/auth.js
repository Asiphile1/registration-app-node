// server/auth.js
const admin = require('./firebase'); // Import firebase config

// Middleware to verify the Firebase ID token from the client
const authenticateUser = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1]; // Extract token from "Authorization: Bearer <token>"
  
  if (!idToken) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized: Invalid token');
  }
};

module.exports = { authenticateUser };
