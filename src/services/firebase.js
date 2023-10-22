// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC59N8cAAy9wBpaYmQzJlQl__ghhyitwc0",
  authDomain: "my-chatapp-e43fa.firebaseapp.com",
  projectId: "my-chatapp-e43fa",
  storageBucket: "my-chatapp-e43fa.appspot.com",
  messagingSenderId: "465566478477",
  appId: "1:465566478477:web:e16184144870ac91f1f2c4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;