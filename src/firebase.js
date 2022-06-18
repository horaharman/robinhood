// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVIVy5JDI7Ps_LX9_0wm__NzuvtW55BSY",
  authDomain: "robinhood-adb6b.firebaseapp.com",
  projectId: "robinhood-adb6b",
  storageBucket: "robinhood-adb6b.appspot.com",
  messagingSenderId: "333126901348",
  appId: "1:333126901348:web:4993b3bc1327a9ee7cc971",
  measurementId: "G-01LP6C9DYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("firebase console",app)
export const db = app.firestore()
const analytics = getAnalytics(app);