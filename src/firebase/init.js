// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rKOdtkep_3RfbAeKFrsg5fb8PEQaU0A",
  authDomain: "fit5032-sanaa.firebaseapp.com",
  projectId: "fit5032-sanaa",
  storageBucket: "fit5032-sanaa.appspot.com",
  messagingSenderId: "257524563767",
  appId: "1:257524563767:web:ee46f4ce3063c1f03724b2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db