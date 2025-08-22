// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-tU2hL3lJZpzQ7_IgRfM1FpNJKgdUa-U",
  authDomain: "my-blog-54257.firebaseapp.com",
  projectId: "my-blog-54257",
  storageBucket: "my-blog-54257.firebasestorage.app",
  messagingSenderId: "924567626452",
  appId: "1:924567626452:web:7545aa511f6c0b79f81141",
  measurementId: "G-48JGBWN03Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
