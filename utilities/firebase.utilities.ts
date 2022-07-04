// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbiOD-ytu2qSE6HlalGjFhNdym55rmJzE",
  authDomain: "hackathon-papafam.firebaseapp.com",
  projectId: "hackathon-papafam",
  storageBucket: "hackathon-papafam.appspot.com",
  messagingSenderId: "868615507642",
  appId: "1:868615507642:web:7868ff36a92ddc43d87c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
