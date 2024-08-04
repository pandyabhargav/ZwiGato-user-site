// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuG4kHmt46RzZ-EOnXFhW0H7nIVQ5Yvyo",
    authDomain: "swigetosingin.firebaseapp.com",
    projectId: "swigetosingin",
    storageBucket: "swigetosingin.appspot.com",
    messagingSenderId: "1087955188849",
    appId: "1:1087955188849:web:ae76c4773e8a91841aefd0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut}; 
