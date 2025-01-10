// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfIrHspTewkJKVHMnxZzvkQfUvCjGO_VA",
  authDomain: "netflix-gpt-3c7f1.firebaseapp.com",
  projectId: "netflix-gpt-3c7f1",
  storageBucket: "netflix-gpt-3c7f1.firebasestorage.app",
  messagingSenderId: "15391123918",
  appId: "1:15391123918:web:c291f1e2bc37d7f284639f",
  measurementId: "G-RW7XJH5XVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Pass app to getAuth
