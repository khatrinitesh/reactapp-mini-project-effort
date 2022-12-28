// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcoYk3A2KYmGsViPLBJ5MA48mNc5yoSQM",
  authDomain: "react-course-f519a.firebaseapp.com",
  projectId: "react-course-f519a",
  storageBucket: "react-course-f519a.appspot.com",
  messagingSenderId: "216615740404",
  appId: "1:216615740404:web:07517d87d4f74f6e3e8fa1",
  measurementId: "G-M0X12E468N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();