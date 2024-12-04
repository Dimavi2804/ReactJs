// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB53eeTb9XFWL_FjiZM1opF8LTDvs45mnk",
  authDomain: "tecnology-store-f4e2c.firebaseapp.com",
  projectId: "tecnology-store-f4e2c",
  storageBucket: "tecnology-store-f4e2c.firebasestorage.app",
  messagingSenderId: "44271541009",
  appId: "1:44271541009:web:9bed3069184c768d384ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)