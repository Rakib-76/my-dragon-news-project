// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Q3M_n9RZYmiGQjQNjL7CP4XqLVX9thw",
  authDomain: "dragon-news-breaking-dbf9d.firebaseapp.com",
  projectId: "dragon-news-breaking-dbf9d",
  storageBucket: "dragon-news-breaking-dbf9d.firebasestorage.app",
  messagingSenderId: "787627908743",
  appId: "1:787627908743:web:a9f4174b508830bbaca222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;