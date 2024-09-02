// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxenroDi2cd24Y6NYfvlDVjaOIF5AZ62w",
  authDomain: "netflixgpt-0333.firebaseapp.com",
  projectId: "netflixgpt-0333",
  storageBucket: "netflixgpt-0333.appspot.com",
  messagingSenderId: "578271525486",
  appId: "1:578271525486:web:f9cb798fdec264d9d8447f",
  measurementId: "G-CYN4NNXZYB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
