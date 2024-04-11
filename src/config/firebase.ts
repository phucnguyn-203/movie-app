// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2jORLPIXkdpryp-H_A3rTXorPKs6NGYw",
  authDomain: "movie-app-27fe2.firebaseapp.com",
  projectId: "movie-app-27fe2",
  storageBucket: "movie-app-27fe2.appspot.com",
  messagingSenderId: "909180970424",
  appId: "1:909180970424:web:962c96501fc62f0ee7db4d",
  measurementId: "G-TH7W8PFVK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);