// server/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account.json'); // Download from Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-firebase-project-id.appspot.com', // Firebase storage
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { admin, db, bucket };
