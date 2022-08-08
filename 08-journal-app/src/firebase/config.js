// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOfJOA-7olEv6q7uX_eFt_41yZIFgDCPo",
  authDomain: "react-cursos-78892.firebaseapp.com",
  projectId: "react-cursos-78892",
  storageBucket: "react-cursos-78892.appspot.com",
  messagingSenderId: "134440152867",
  appId: "1:134440152867:web:9c5f3616e1c5361b2b6696"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );