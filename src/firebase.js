import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANOPBeHMR6AINdBFTA-VAebxTVsv8MiX4",
  authDomain: "firejournal-4506b.firebaseapp.com",
  projectId: "firejournal-4506b",
  storageBucket: "firejournal-4506b.appspot.com",
  messagingSenderId: "651275125321",
  appId: "1:651275125321:web:47ac1f84964264c5387598"
};


const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
