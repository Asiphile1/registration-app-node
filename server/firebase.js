const admin = require("firebase-admin");
const serviceAccount = require("./credentials/registrationapp-63c7c-firebase-adminsdk-ufwkq-a41d2fa9b5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "registrationapp-63c7c.appspot.com",
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { admin, db, bucket };
