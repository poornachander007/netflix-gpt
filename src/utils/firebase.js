import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDblBjYuBhYfBWp-Ls8bOBjEqFGPH1Wh8A",
  authDomain: "netflixgpt-poorna.firebaseapp.com",
  projectId: "netflixgpt-poorna",
  storageBucket: "netflixgpt-poorna.appspot.com",
  messagingSenderId: "1018558595598",
  appId: "1:1018558595598:web:1a04e6e68e4e1c27fcf25f",
  measurementId: "G-N5L178Y9M8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
