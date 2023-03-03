// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBDzlVZqYV6jPOr3SH9SAeQNn3m-arnOzQ",
    authDomain: "restaurant-e426b.firebaseapp.com",
    projectId: "restaurant-e426b",
    storageBucket: "restaurant-e426b.appspot.com",
    messagingSenderId: "324001067224",
    appId: "1:324001067224:web:852965a4236cbfc806a7ad"
  
  };
  
  
  // Initialize Firebase

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);