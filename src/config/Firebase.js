// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkCzv2BJG-N47fd_RFx6tkfmBbQ8luUIc",
  authDomain: "restaurante-p4-bootcamp.firebaseapp.com",
  projectId: "restaurante-p4-bootcamp",
  storageBucket: "restaurante-p4-bootcamp.appspot.com",
  messagingSenderId: "897733168404",
  appId: "1:897733168404:web:ee1a1988e6a27b7527c601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//servicios que estoy ocupando 

export const db = getFirestore(app)