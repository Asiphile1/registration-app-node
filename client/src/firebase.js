import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAKbYkJQ-_OHSwM4H9UCZ2_3jGWtLT74k",
  authDomain: "registrationapp-63c7c.firebaseapp.com",
  projectId: "registrationapp-63c7c",
  storageBucket: "registrationapp-63c7c.appspot.com",
  messagingSenderId: "977347630718",
  appId: "1:977347630718:web:ced534e38a910546b7aa2f",
  measurementId: "G-8T338SBMMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Export the services
export { db, storage, auth };
