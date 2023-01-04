// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCKJ_QPBPb9vNCLPss_DjABLzLvBD5mGhI",
  authDomain: "fitness-app-a4d37.firebaseapp.com",
  projectId: "fitness-app-a4d37",
  storageBucket: "fitness-app-a4d37.appspot.com",
  messagingSenderId: "1006239389401",
  appId: "1:1006239389401:web:5c7e591bd274158624d0c8",
  measurementId: "G-TP964SV964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};