// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2B0DX0jiVKpLo22wvWLp3vMI15tTRt1U",
  authDomain: "muicrud.firebaseapp.com",
  projectId: "muicrud",
  storageBucket: "muicrud.appspot.com",
  messagingSenderId: "44887972356",
  appId: "1:44887972356:web:d4edc67e0a88e01ce6b351",
  measurementId: "G-GECQ3WKGMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
