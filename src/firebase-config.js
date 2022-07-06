// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0yVA3nK-GZ3adKreSQluq6AbYq0s5xsY",
  authDomain: "one-on-one-app-34bd9.firebaseapp.com",
  projectId: "one-on-one-app-34bd9",
  storageBucket: "one-on-one-app-34bd9.appspot.com",
  messagingSenderId: "676320763677",
  appId: "1:676320763677:web:21c755233ed5a57c4bcbf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
