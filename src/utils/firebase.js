// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdCD3MThBfao6h9D9r2QM8pDuNSy03sOM",
  authDomain: "netflixgpt-dc31a.firebaseapp.com",
  projectId: "netflixgpt-dc31a",
  storageBucket: "netflixgpt-dc31a.appspot.com",
  messagingSenderId: "316877130199",
  appId: "1:316877130199:web:8b7852f70678df5b7d6392",
  measurementId: "G-4ZV5RQVPZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
