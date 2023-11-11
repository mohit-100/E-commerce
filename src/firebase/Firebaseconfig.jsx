// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoQYlzrO690OQV6VaWz_ybXmuVgMU8lng",
  authDomain: "firstapp-ae670.firebaseapp.com",
  projectId: "firstapp-ae670",
  storageBucket: "firstapp-ae670.appspot.com",
  messagingSenderId: "135457803617",
  appId: "1:135457803617:web:6dbc31bf22ff5467690920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;